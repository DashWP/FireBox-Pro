<?php
/**
 * @package         FireBox
 * @version         2.1.15 Pro
 * 
 * @author          FirePlugins <info@fireplugins.com>
 * @link            https://www.fireplugins.com
 * @copyright       Copyright © 2024 FirePlugins All Rights Reserved
 * @license         GNU GPLv3 <http://www.gnu.org/licenses/gpl.html> or later
*/

namespace FireBox\Core\API;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class API
{
	private $open_routes = [
	];
	
	private $api_routes = [
		'Forms',
		'Submissions'
	];
	
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'register_open_routes']);

		if (!$this->canRun())
		{
			return;
		}
		
        add_action('rest_api_init', [$this, 'register_api_routes']);
    }

	private function canRun()
	{
		return \FireBox\Core\Helpers\Settings::findSettingsOption('enable_json_api') === '1';
	}
	
	public function register_open_routes()
	{
		foreach ($this->open_routes as $route)
		{
			$class = '\FireBox\Core\API\Routes\\' . $route;
			$api = new $class();
			$api->register();
		}
	}
	
	public function register_api_routes()
	{
		foreach ($this->api_routes as $route)
		{
			$class = '\FireBox\Core\API\Routes\\' . $route;
			$api = new $class();
			$api->register();
		}
	}
}