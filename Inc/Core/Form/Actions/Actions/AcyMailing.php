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

namespace FireBox\Core\Form\Actions\Actions;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class AcyMailing extends \FireBox\Core\Form\Actions\Action
{
	protected function prepare()
	{
		$this->action_settings = [
			'list_id' => isset($this->form_settings['attrs']['acymailingListID']) ? trim($this->form_settings['attrs']['acymailingListID']) : '',
			'doubleoptin' => isset($this->form_settings['attrs']['acymailingDoubleOptin']) ? $this->form_settings['attrs']['acymailingDoubleOptin'] : false,
		];
	}

	/**
	 * Runs the action.
	 * 
	 * @throws  Exception
	 * 
	 * @return  void
	 */
	public function run()
	{
		$api = new \FPFramework\Base\Integrations\AcyMailing();
		$api->setMetadata($this->getMetadata());

		$api->subscribe(
			$this->submission['prepared_fields']['email']['value'],
			$this->getParsedFieldValues(),
			$this->action_settings['list_id'],
			$this->action_settings['doubleoptin']
		);
		
		if (!$api->success())
		{
			throw new \Exception($api->getLastError());
		}

		return true;
	}

	private function getMetadata()
	{
		$source = 'FireBox - #' . $this->submission['box_id'] . ' - ' . get_the_title($this->submission['box_id']);
		
		return [
			'source' => $source
		];
	}

	/**
	 * Validates the action prior to running it.
	 * 
	 * @return  void
	 */
	public function validate()
	{
		if (empty($this->action_settings['list_id']))
		{
			throw new \Exception('AcyMailing error: No AcyMailing list selected.');
		}

		return true;
	}
}