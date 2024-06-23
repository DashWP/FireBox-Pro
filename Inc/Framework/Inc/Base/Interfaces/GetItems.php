<?php
/**
 * @package         FirePlugins Framework
 * @version         1.1.103
 * 
 * @author          FirePlugins <info@fireplugins.com>
 * @link            https://www.fireplugins.com
 * @copyright       Copyright © 2024 FirePlugins All Rights Reserved
 * @license         GNU GPLv3 <http://www.gnu.org/licenses/gpl.html> or later
*/

namespace FPFramework\Base\Interfaces;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

interface GetItems
{
    function getItems($offset, $limit);
}