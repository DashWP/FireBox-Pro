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

class PHPScripts
{
	/**
	 * Holds the PHP Scripts Settings
	 * 
	 * @return  array
	 */
	public function getSettings()
	{
		$settings = [
			'title' => firebox()->_('FB_PHPSCRIPTS'),
			'content' => [
				'phpscripts_render' => [
					'title' => [
						'title' => fpframework()->_('FPF_RENDER'),
						'description' => firebox()->_('FB_METABOX_PHPSCRIPTS_RENDER_DESC')
					],
					'fields' => [
						[
							'name' => 'phpscripts.beforerender',
							'type' => 'Textarea',
							'label' => firebox()->_('FB_PHPSCRIPTS_BEFORERENDER'),
							'description' => firebox()->_('FB_PHPSCRIPTS_BEFORERENDER_DESC'),
							'input_class' => ['fullwidth'],
							'rows' => 10,
							'filter' => 'php',
							'mode' => 'text/x-php'
						],
						[
							'name' => 'phpscripts.afterrender',
							'type' => 'Textarea',
							'label' => firebox()->_('FB_PHPSCRIPTS_AFTERRENDER'),
							'description' => firebox()->_('FB_PHPSCRIPTS_AFTERRENDER_DESC'),
							'input_class' => ['fullwidth'],
							'rows' => 10,
							'filter' => 'php',
							'mode' => 'text/x-php'
						],
					]
				],
				'phpscripts_state' => [
					'title' => [
						'title' => fpframework()->_('FPF_STATE'),
						'description' => firebox()->_('FB_METABOX_PHPSCRIPTS_STATE_DESC')
					],
					'fields' => [
						[
							'name' => 'phpscripts.open',
							'type' => 'Textarea',
							'label' => firebox()->_('FB_PHPSCRIPTS_OPEN'),
							'description' => firebox()->_('FB_PHPSCRIPTS_OPEN_DESC'),
							'input_class' => ['fullwidth'],
							'rows' => 10,
							'filter' => 'php',
							'mode' => 'text/x-php'
						],
						[
							'name' => 'phpscripts.close',
							'type' => 'Textarea',
							'label' => firebox()->_('FB_PHPSCRIPTS_CLOSE'),
							'description' => firebox()->_('FB_PHPSCRIPTS_CLOSE_DESC'),
							'input_class' => ['fullwidth'],
							'rows' => 10,
							'filter' => 'php',
							'mode' => 'text/x-php'
						],
					]
				],
				'phpscripts_form' => [
					'title' => [
						'title' => firebox()->_('FB_FORM'),
						'description' => firebox()->_('FB_METABOX_PHPSCRIPTS_FORM_DESC')
					],
					'fields' => [
						[
							'name' => 'phpscripts.formsuccess',
							'type' => 'Textarea',
							'label' => firebox()->_('FB_PHPSCRIPTS_FORM_SUCCESS'),
							'description' => firebox()->_('FB_PHPSCRIPTS_FORM_SUCCESS_DESC'),
							'input_class' => ['fullwidth'],
							'rows' => 10,
							'filter' => 'php',
							'mode' => 'text/x-php'
						],
					]
				]
			]
		];

		return apply_filters('firebox/box/settings/phpscripts/edit', $settings);
	}
}