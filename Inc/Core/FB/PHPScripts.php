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

namespace FireBox\Core\FB;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

use FPFramework\Libs\Registry;

class PHPScripts
{
    /**
     * The campaign object
     *
     * @var  object
     */
    private $campaign;

    /**
     * PHP Code that is before the actual user input.
     * 
     * @var  string
     */
    private $php_before = '';

    /**
     * PHP Code that is after the actual user input.
     * 
     * @var  string
     */
    private $php_after = '';

	/**
	 * The payload to pass to the PHP script.
	 * 
	 * @var  array
	 */
	private $payload = [];

    public function __construct()
    {
        add_action('firebox/box/before_render', [$this, 'onFireBoxBeforeRender']);
        add_filter('firebox/box/after_render', [$this, 'onFireBoxAfterRender'], 10, 2);
        add_action('firebox/box/on_open', [$this, 'onFireBoxOpen']);
        add_action('firebox/box/on_close', [$this, 'onFireBoxClose']);
        add_action('firebox/form/success', [$this, 'onFireFormSuccess'], 10, 3);
    }

    /**
     * The Befor Render event fires before the campaign's layout is ready.
     *
     * @param  object $campaign  The campaign's settings object
     *
     * @return void
     */
    public function onFireBoxBeforeRender($campaign)
    {
        $this->box = $campaign;
        $this->campaign = $campaign;
        $this->runPHPScript('beforerender');
    }

    /**
     * The After Render event fires after the campaign's layout is ready.
     *
     * @param  string $html      The campaign's layout
     * @param  object $campaign  The campaign's settings object
     *
     * @return void
     */
    public function onFireBoxAfterRender($html, $campaign)
    {
		$this->box = $campaign;
		$this->campaign = $campaign;
		$this->payload['boxLayout'] = &$html;
		$this->payload['campaignLayout'] = &$html;
		
        $this->runPHPScript('afterrender');
		
		return $html;
    }

    /**
     * The Open event fires every time the campaign opens
     *
     * @param  object $campaign  The campaign's settings object
     *
     * @return void
     */
    public function onFireBoxOpen($campaign)
    {
        $this->box = $campaign;
        $this->campaign = $campaign;

        $this->runPHPScript('open');
    }

    /**
     * Close event fires every time the campaign closes
     *
     * @param  object $campaign  The campaign's settings object
     * 
     * @return void
     */
    public function onFireBoxClose($campaign)
    {
        $this->box = $campaign;
        $this->campaign = $campaign;

        $this->runPHPScript('close');
    }

    /**
     * Fires after a successful form submission.
     *
     * @param  object $campaign         The campaign's settings object
     * @param  array  $values      The form values
     * @param  array  $submission  The submission
     *
     * @return void
     */
    public function onFireFormSuccess($campaign, $values, $submission)
    {
        $this->box = $campaign;
        $this->campaign = $campaign;
        $this->payload['values'] = $values;
        $this->payload['submission'] = $submission;

        // Find the first form ID and wrap the php code in a condition to check if the form ID matches the current form ID
        $forms = \FireBox\Core\Helpers\Form\Form::getCampaignForms([$campaign->ID => $campaign->post_title]);
        if (count($forms))
        {
            $form_id = $forms[0]['id'];
            
            $this->php_before = 'if ($submission[\'form_id\'] === \'' . $form_id . '\') {';
            $this->php_after = '}';
        }

        $this->runPHPScript('formsuccess');
    }

    /**
     * Run user-defined PHP scripts
     *
     * @param   String  $script   The PHP code to run
     *
     * @return  void
     */
    private function runPHPScript($php_script)
    {
        if (!$php_script = $this->campaign->params->get('phpscripts.' . $php_script))
        {
            return;
        }

        $this->payload['box'] = $this->campaign;
        $this->payload['campaign'] = $this->campaign;

        // Run PHP
        (new \FPFramework\Base\Executer($this->php_before . $php_script . $this->php_after, $this->payload))->run();
    }
}