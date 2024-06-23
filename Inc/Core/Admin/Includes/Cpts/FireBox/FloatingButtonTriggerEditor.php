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

namespace FireBox\Core\Admin\Includes\Cpts\FireBox;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

use FPFramework\Base\FieldsParser;

class FloatingButtonTriggerEditor
{
	public function __construct()
	{
		if (!is_admin())
		{
			return;
		}
		
		add_action('current_screen', [$this, 'validate']);
	}

	/**
	 * Runs only on FireBox CPT
	 * 
	 * @return  void
	 */
	public function validate()
	{
		$current_screen = get_current_screen();
		if ($current_screen->id == 'firebox')
		{
			$this->run();
		}
	}

	/**
	 * Runs the module
	 * 
	 * @return  void
	 */
	private function run()
	{
		add_action('firebox/editor/after_tabs', [$this, 'add_popup'], 11);
	}

	/**
	 * Adds the Floating Button trigger settings popup to the page.
	 * 
	 * @return  void
	 */
	public function add_popup()
	{
		// global post is the new/editing box
		global $post;

		$formData = [
			'text' => '',
			'bgcolor' => '',
			'textcolor' => '',
			'fontsize' => ''
		];

		$settings = \FireBox\Core\Admin\Forms\FireBox::getSettings();
		$behavior_form = $settings['data']['behavior'];
		$floatingbutton_form_settings = $behavior_form['content']['floatingbutton']['fields'];

		if ($post->ID && $meta = get_post_meta($post->ID, 'fpframework_meta_settings', true))
		{
			$floatingbutton_form_data = isset($meta['floatingbutton_message']) ? $meta['floatingbutton_message'] : [];
			$formData = array_merge($formData, $floatingbutton_form_data);
		}

		$fields = [
			'wrapper' => [],
			'fields' => $floatingbutton_form_settings
		];

		$fieldsParser = new FieldsParser();

		ob_start();
		$fieldsParser->renderSectionFields($fields);
		$content = ob_get_contents();
		ob_end_clean();

		$payload = [
			'id' => 'fpf-floating-button-trigger-form-modal',
			'title' => firebox()->_('FB_EDIT_MESSAGE'),
			'content' => $content,
			'width' => '800px',
			'footer' => '<a href="#" class="fpf-modal-close fpf-button">' . fpframework()->_('FPF_CLOSE') . '</a>'
		];
		
        \FPFramework\Helpers\HTML::renderModal($payload);
	}
}