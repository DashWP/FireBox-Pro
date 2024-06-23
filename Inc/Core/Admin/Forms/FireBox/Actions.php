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

namespace FireBox\Core\Admin\Forms\FireBox;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

use FireBox\Core\Helpers\BoxHelper;

class Actions
{
	/**
	 * Holds the Actions Settings
	 * 
	 * @return  array
	 */
	public function getSettings()
	{
		$boxes = BoxHelper::getAllMirrorBoxesExceptID(get_the_ID());

		// if we are editing a box, replace its name in the list with `This Box`
		if (isset($_GET['post'])) //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		{
			$popup = \intval($_GET['post']); //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$boxes[$popup] = firebox()->_('FB_THIS_CAMPAIGN') . '(' . $popup . ')';
		}
		
		return [
			'title' => firebox()->_('FB_METABOX_ACTIONS'),
			'content' => [
				'actions' => [
					'wrapper' => [
						'class' => ['grid-x', 'grid-margin-y']
					],
					'fields' => [
						[
							'type' => 'Alert',
							'class' => ['margin-bottom-1'],
							'input_class' => ['primary', 'flex-container'],
							'right_action' => '<a href="https://www.fireplugins.com/docs/firebox/the-popup-editor/working-with-actions"><i class="dashicons dashicons-info"></i>' . fpframework()->_('FPF_HELP') . '</a>',
							'text' => firebox()->_('FB_ACTIONS_ALERT_DESC')
						],
						
						[
							'type' => 'Actions',
							'name' => 'actions',
							'class' => ['cell', 'fb-actions', 'popup-repeater', 'fb-actions-align-center', 'margin-top-0'],
							'actions_class' => ['text-center', 'margin-top-1'],
							'btn_label' => firebox()->_('FB_ADD_ACTION'),
							'actions_prepend' => '<li class="fb_action_edit_init dashicons dashicons-edit fpf-modal-opener" data-fpf-modal="#fb_repeater_actions_modal" title="' . esc_attr(fpframework()->_('FPF_EDIT_ITEM')) . '"></i></li>',
							'fields' => [
								[
									'type' => 'CustomDiv',
									'class' => ['fpf-side-by-side-items', 'flex-child-grow']
								],
								[
									'name' => 'enabled',
									'type' => 'FPToggle',
									'render_group' => false,
									'checked' => true
								],
								[
									'name' => 'name',
									'type' => 'Text',
									'render_group' => false,
									'input_class' => ['flex-child-grow', 'fpf-repeater-item-label-input'],
									'default' => fpframework()->_('FPF_NEW_ACTION_LABEL')
								],
								[
									'type' => 'CustomDiv',
									'position' => 'end'
								],
								[
									'type' => 'CustomDiv',
									'class' => ['hide', 'fb-repeater-item-action-settings']
								],
								[
									'name' => 'name',
									'type' => 'Text',
									'placeholder' => 'FPF_ACTION_NAME',
									'input_class' => ['fpf-repeater-item-modal-title', 'fullwidth'],
									'default' => fpframework()->_('FPF_NEW_ACTION_LABEL')
								],
								[
									'name' => 'when',
									'type' => 'Dropdown',
									'label' => 'FPF_EVENT',
									'description' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC'),
									'default' => 'beforeOpen',
									'input_class' => ['fullwidth'],
									'choices' => [
										'beforeOpen' => 'FPF_BEFORE_OPEN',
										'open' => 'FPF_OPEN',
										'afterOpen' => 'FPF_AFTER_OPEN',
										'beforeClose' => 'FPF_BEFORE_CLOSE',
										'close' => 'FPF_CLOSE',
										'afterClose' => 'FPF_AFTER_CLOSE'
									]
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_BEFOREOPEN'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:beforeOpen'
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_OPEN'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:open'
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_AFTEROPEN'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:afterOpen'
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_BEFORECLOSE'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:beforeClose'
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_CLOSE'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:close'
								],
								[
									'type' => 'Label',
									'text' => firebox()->_('FB_METABOX_ACTION_WHEN_DESC_AFTERCLOSE'),
									'input_class' => ['fpf-field-descrption-text'],
									'showon' => '[actions][ITEM_ID][when]:afterClose'
								],
								[
									'name' => 'do',
									'type' => 'Dropdown',
									'label' => 'FPF_ACTION',
									'description' => firebox()->_('FB_METABOX_ACTION_DO_DESC'),
									'default' => 'openbox',
									'input_class' => ['fullwidth'],
									'choices' => [
										firebox()->_('FB_CAMPAIGN') => [
											'openbox' => firebox()->_('FB_METABOX_ACTION_DO_OPEN_A_BOX'),
											'closebox' => firebox()->_('FB_METABOX_ACTION_DO_CLOSE_A_BOX'),
											'destroybox' => firebox()->_('FB_METABOX_ACTION_DO_DESTROY_A_BOX'),
											'closeall' => firebox()->_('FB_METABOX_ACTION_DO_CLOSE_ALL_OPENED_BOX'),
										],
										'FPF_OTHER' => [
											'gotourl' => firebox()->_('FB_METABOX_ACTION_DO_REDIRECT_TO_URL'),
											'reloadpage' => firebox()->_('FB_METABOX_ACTION_DO_RELOAD_PAGE'),
											'custom' => firebox()->_('FB_METABOX_ACTION_DO_RUN_JS'),
										]
									]
								],
								[
									'name' => 'box',
									'type' => 'Dropdown',
									'label' => firebox()->_('FB_CAMPAIGN'),
									'description' => firebox()->_('FB_METABOX_ACTION_CAMPAIGN_DESC'),
									'choices' => $boxes,
									'input_class' => ['fullwidth'],
									'showon' => '[actions][ITEM_ID][do]:openbox,closebox,destroybox'
								],
								[
									'name' => 'delay',
									'type' => 'Number',
									'placeholder' => 0,
									'default' => 0,
									'min' => 0,
									'step' => 1,
									'addon' => 'sec',
									'control_inner_class' => ['fpf-side-by-side-items'],
									'input_class' => ['flex-child-grow'],
									'label' => firebox()->_('FB_METABOX_DELAY'),
									'description' => firebox()->_('FB_METABOX_ACTION_DELAY_DESC'),
									'showon' => '[actions][ITEM_ID][do]:openbox,closebox'
								],
								[
									'name' => 'url',
									'type' => 'Text',
									'label' => 'FPF_URL',
									'description' => firebox()->_('FB_METABOX_ACTION_URL_DESC'),
									'placeholder' => 'https://',
									'default' => '',
									'input_class' => ['fullwidth'],
									'showon' => '[actions][ITEM_ID][do]:gotourl'
								],
								[
									'name' => 'newtab',
									'type' => 'FPToggle',
									'label' => firebox()->_('FB_METABOX_ACTION_NEW_TAB'),
									'description' => firebox()->_('FB_METABOX_ACTION_NEW_TAB_DESC'),
									'showon' => '[actions][ITEM_ID][do]:gotourl'
								],
								[
									'name' => 'customcode',
									'type' => 'Textarea',
									'label' => 'FPF_CUSTOM_JAVASCRIPT',
									'description' => firebox()->_('FB_METABOX_ACTION_CUSTOM_CODE_DESC'),
									'placeholder' => 'var message = 10; alert(message);',
									'input_class' => ['fullwidth'],
									'rows' => 7,
									'showon' => '[actions][ITEM_ID][do]:custom',
									'filter' => 'raw',
									'mode' => 'javascript'
								],
								[
									'type' => 'CustomDiv',
									'position' => 'end'
								]
							]
						],
						
						
					]
				]
			]
		];
	}
}