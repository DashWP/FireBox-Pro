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

namespace FireBox\Core\FB\Actions;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

use FPFramework\Libs\Registry;

class AutoClose extends Actions
{
    public function __construct()
    {
        add_action('firebox/box/before_render', [$this, 'onFireBoxBeforeRender'], 1);
    }

    /**
     * The BeforeRender event fires before the box's layout is ready.
     *
     * @param  object $box           The box's settings object
     *
     * @return void
     */
    public function onFireBoxBeforeRender($box)
    {
        if (!isset($box->params))
        {
            return;
        }

        if (!$auto_close = $box->params->get('box_auto_close'))
        {
            return;
        }

        if ($auto_close[0] != 'yes')
        {
            return;
        }
        
        if (!$delay = $box->params->get('box_auto_close_seconds'))
        {
            return;
        }

        if ($delay <= 0)
        {
            return;
        }

        $this->actions[] = [
            'box' => $box->ID,
            'delay' => $box->params->get('box_auto_close_seconds'),
            'do' => 'closebox',
            'when' => 'afterOpen'
        ];
    }
}