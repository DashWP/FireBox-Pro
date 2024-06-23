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

namespace FireBox\Core\Fields;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

use FPFramework\Base\Fields\Repeater;

class Actions extends Repeater
{
	/**
	 * Override the layout of the field.
	 * 
	 * @var  string
	 */
	protected $layout_override = 'FPFramework\Base\Fields\Repeater';
	
	/**
	 * Runs before field renders.
	 * Sets the value and template before rendering the field
	 * 
	 * @return  void
	 */
	public function onBeforeRender()
	{
		parent::onBeforeRender();

		$this->_loadMedia();

		add_action('admin_footer', [$this, 'renderRepeaterItemModal'], 13);
	}

	/**
	 * Load media
	 * 
	 * @return  void
	 */
	private function _loadMedia()
	{
		wp_register_script(
			'firebox-actions-field',
			FBOX_MEDIA_ADMIN_URL . 'js/fb_actions.js',
			[],
			FBOX_VERSION,
			true
		);
		wp_enqueue_script('firebox-actions-field');
	}

	/**
	 * Load repeater item action settings modal
	 * 
	 * @return  void
	 */
	public function renderRepeaterItemModal()
	{
		$payload = [
			'id' => 'fb_repeater_actions_modal',
			'title' => firebox()->_('FB_ACTION_SETTINGS'),
			'width' => '600px',
			'class' => ['skip-esc-close', 'fpf-align-middle'],
			'overlay_click' => false,
			'modal_body_class' => ['grid-x', 'grid-margin-y', 'fpf-cells-small-margin'],
			'footer' => '<a href="#" class="fpf-modal-close fpf-button">' . fpframework()->_('FPF_CLOSE') . '</a><a href="#" class="fpf-button primary fpf-modal-save close">' . fpframework()->_('FPF_SAVE') . '</a>'
		];

        \FPFramework\Helpers\HTML::renderModal($payload);
	}
}