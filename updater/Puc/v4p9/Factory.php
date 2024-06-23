<?php
if ( !class_exists('Puc_v4p9_Factory', false) ):

	/**
	 * A factory that builds update checker instances.
	 *
	 * When multiple versions of the same class have been loaded (e.g. PluginUpdateChecker 4.0
	 * and 4.1), this factory will always use the latest available minor version. Register class
	 * versions by calling {@link PucFactory::addVersion()}.
	 *
	 * At the moment it can only build instances of the UpdateChecker class. Other classes are
	 * intended mainly for internal use and refer directly to specific implementations.
	 */
	class Puc_v4p9_Factory {
		protected static $classVersions = array();
		protected static $sorted = false;

		protected static $myMajorVersion = '';
		protected static $latestCompatibleVersion = '';

		/**
		 * Create a new instance of the update checker.
		 *
		 * This method automatically detects if you're using it for a plugin or a theme and chooses
		 * the appropriate implementation for your update source (JSON file, GitHub, BitBucket, etc).
		 *
		 * @see Puc_v4p9_UpdateChecker::__construct
		 *
		 * @param string $metadataUrl The URL of the metadata file, a GitHub repository, or another supported update source.
		 * @param string $fullPath Full path to the main plugin file or to the theme directory.
		 * @param string $slug Custom slug. Defaults to the name of the main plugin file or the theme directory.
		 * @param int $checkPeriod How often to check for updates (in hours).
		 * @param string $optionName Where to store book-keeping info about update checks.
		 * @param string $muPluginFile The plugin filename relative to the mu-plugins directory.
		 * @return Puc_v4p9_Plugin_UpdateChecker|Puc_v4p9_Theme_UpdateChecker|Puc_v4p9_Vcs_BaseChecker
		 */
		public static function buildUpdateChecker($metadataUrl, $fullPath, $slug = '', $checkPeriod = 12, $optionName = '', $muPluginFile = '') {
			$id = null;

			if ( self::isPluginFile($fullPath) ) {
				$type = 'Plugin';
				$id = $fullPath;
			} else {
				throw new RuntimeException(sprintf(
					'The update checker cannot determine if "%s" is a plugin. ' .
					'This is a bug. Please contact the PUC developer.',
					htmlentities($fullPath)
				));
			}

			//Which hosting service does the URL point to?
			$checkerClass = $type . '_UpdateChecker';

			$apiClass = null;

			$checkerClass = self::getCompatibleClassVersion($checkerClass);
			
			return new $checkerClass($metadataUrl, $id, $slug, $checkPeriod, $optionName, $muPluginFile);
		}

		/**
		 *
		 * Normalize a filesystem path. Introduced in WP 3.9.
		 * Copying here allows use of the class on earlier versions.
		 * This version adapted from WP 4.8.2 (unchanged since 4.5.0)
		 *
		 * @param string $path Path to normalize.
		 * @return string Normalized path.
		 */
		public static function normalizePath($path) {
			if ( function_exists('wp_normalize_path') ) {
				return wp_normalize_path($path);
			}
			$path = str_replace('\\', '/', $path);
			$path = preg_replace('|(?<=.)/+|', '/', $path);
			if ( substr($path, 1, 1) === ':' ) {
				$path = ucfirst($path);
			}
			return $path;
		}

		/**
		 * Check if the path points to a plugin file.
		 *
		 * @param string $absolutePath Normalized path.
		 * @return bool
		 */
		protected static function isPluginFile($absolutePath) {
			if (strpos($absolutePath, WP_PLUGIN_DIR) === 0)
			{
				return true;
			}

			if (is_file($absolutePath))
			{
				return true;
			}

			return false;
		}

		/**
		 * Get the name of the hosting service that the URL points to.
		 *
		 * @param string $metadataUrl
		 * @return string|null
		 */
		private static function getVcsService($metadataUrl) {
			$service = null;

			//Which hosting service does the URL point to?
			$host = parse_url($metadataUrl, PHP_URL_HOST);
			$path = parse_url($metadataUrl, PHP_URL_PATH);

			//Check if the path looks like "/user-name/repository".
			//For GitLab.com it can also be "/user/group1/group2/.../repository".
			$repoRegex = '@^/?([^/]+?)/([^/#?&]+?)/?$@';
			if ( $host === 'gitlab.com' ) {
				$repoRegex = '@^/?(?:[^/#?&]++/){1,20}(?:[^/#?&]++)/?$@';
			}
			if ( preg_match($repoRegex, $path) ) {
				$knownServices = array(
					'github.com' => 'GitHub',
					'bitbucket.org' => 'BitBucket',
					'gitlab.com' => 'GitLab',
				);
				if ( isset($knownServices[$host]) ) {
					$service = $knownServices[$host];
				}
			}

			return apply_filters('puc_get_vcs_service', $service, $host, $path, $metadataUrl);
		}

		/**
		 * Get the latest version of the specified class that has the same major version number
		 * as this factory class.
		 *
		 * @param string $class Partial class name.
		 * @return string|null Full class name.
		 */
		protected static function getCompatibleClassVersion($class) {
			if ( isset(self::$classVersions[$class][self::$latestCompatibleVersion]) ) {
				return self::$classVersions[$class][self::$latestCompatibleVersion];
			}
			return null;
		}

		/**
		 * Get the specific class name for the latest available version of a class.
		 *
		 * @param string $class
		 * @return null|string
		 */
		public static function getLatestClassVersion($class) {
			if ( !self::$sorted ) {
				self::sortVersions();
			}

			if ( isset(self::$classVersions[$class]) ) {
				return reset(self::$classVersions[$class]);
			} else {
				return null;
			}
		}

		/**
		 * Sort available class versions in descending order (i.e. newest first).
		 */
		protected static function sortVersions() {
			foreach ( self::$classVersions as $class => $versions ) {
				uksort($versions, array(__CLASS__, 'compareVersions'));
				self::$classVersions[$class] = $versions;
			}
			self::$sorted = true;
		}

		protected static function compareVersions($a, $b) {
			return -version_compare($a, $b);
		}

		/**
		 * Register a version of a class.
		 *
		 * @access private This method is only for internal use by the library.
		 *
		 * @param string $generalClass Class name without version numbers, e.g. 'PluginUpdateChecker'.
		 * @param string $versionedClass Actual class name, e.g. 'PluginUpdateChecker_1_2'.
		 * @param string $version Version number, e.g. '1.2'.
		 */
		public static function addVersion($generalClass, $versionedClass, $version) {
			if ( empty(self::$myMajorVersion) ) {
				$nameParts = explode('_', __CLASS__, 3);
				self::$myMajorVersion = substr(ltrim($nameParts[1], 'v'), 0, 1);
			}

			//Store the greatest version number that matches our major version.
			$components = explode('.', $version);
			if ( $components[0] === self::$myMajorVersion ) {

				if (
					empty(self::$latestCompatibleVersion)
					|| version_compare($version, self::$latestCompatibleVersion, '>')
				) {
					self::$latestCompatibleVersion = $version;
				}

			}

			if ( !isset(self::$classVersions[$generalClass]) ) {
				self::$classVersions[$generalClass] = array();
			}
			self::$classVersions[$generalClass][$version] = $versionedClass;
			self::$sorted = false;
		}
	}

endif;