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

namespace FireBox\Core\Notices;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class Ajax
{
    public function __construct()
    {
        add_action('wp_ajax_firebox_get_notices', [$this, 'get_notices']);
        add_action('wp_ajax_nopriv_firebox_get_notices', [$this, 'get_notices']);

        
        add_action('wp_ajax_firebox_download_key_notice_activate', [$this, 'activate_download_key']);
        add_action('wp_ajax_nopriv_firebox_download_key_notice_activate', [$this, 'activate_download_key']);
        
    }

    /**
     * Get Notices.
     * 
     * @return  void
     */
    public function get_notices()
    {
        if (!current_user_can('manage_options'))
		{
			return;
        }
        
        $nonce = isset($_GET['nonce']) ? sanitize_text_field($_GET['nonce']) : '';
        
        // verify nonce
        if (!$verify = wp_verify_nonce($nonce, 'firebox_notices'))
        {
            return false;
		}

        $exclude = isset($_GET['exclude']) ? sanitize_text_field($_GET['exclude']) : '';
        $exclude = array_filter(explode(',', $exclude));

        $notices = \FireBox\Core\Notices\Notices::getInstance([
            'exclude' => $exclude
        ])->getNotices();

        echo wp_json_encode([
            'error' => false,
            'notices' => $notices
        ]);
        wp_die();
    }

    
    /**
     * Activates the given download key.
     * 
     * @return  void
     */
    public function activate_download_key()
    {
        if (!current_user_can('manage_options'))
		{
			return;
        }
        
        $nonce = isset($_GET['nonce']) ? sanitize_text_field($_GET['nonce']) : '';
        
        // verify nonce
        if (!$verify = wp_verify_nonce($nonce, 'firebox_notices'))
        {
            return false;
		}

        $license_key = isset($_GET['download_key']) ? sanitize_text_field($_GET['download_key']) : '';

        $activation = \FireBox\Core\Helpers\License::activateLicenseKey($license_key);

        // Also update firebox_settings -> license_key so it also appears on the FireBox Settings page
        $params = get_option('firebox_settings');
        $params['license_key'] = $license_key;
        update_option('firebox_settings', $params);

        echo wp_json_encode($activation);
        wp_die();
    }
    
}