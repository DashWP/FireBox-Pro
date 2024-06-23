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

namespace FPFramework\Base\SmartTags;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class Woo extends SmartTag
{
    /**
     * WooCommerce Condition used to fetch WooCommerce-related data.
     * 
     * @return  object
     */
    private $woo_condition;
    
    /**
     * Returns the Smart Tag value.
     * 
     * @return  string
     */
    public function fetchValue($key)
	{
		if (!$key)
		{
			return '';
		}

		if (!is_string($key))
		{
			return '';
		}

        $key = str_replace('.', '', $key);
        $method = 'get' . $key;

        if (!method_exists($this, $method))
        {
            return;
        }

        $this->woo_condition = $this->fetchWooCondition();

        return $this->$method();
    }

    private function fetchWooCondition()
    {
		$hash = md5('fetchWooCondition');

		// check cache
		if ($data = wp_cache_get($hash))
		{
			return $data;
		}
        
        $data = new \FPFramework\Base\Conditions\Conditions\WooCommerce\CartValue();

        wp_cache_set($hash, $data);
        
        return $data;
    }

    /**
     * Returns the total cart items count.
     * 
     * @return  int
     */
    public function getCartCount()
    {
        $min = (int) $this->parsedOptions->get('min', 0);

        $cart_count = count($this->woo_condition->getCartProducts());

        if (!$min)
        {
            return $cart_count;
        }
        
        return $min > $cart_count ? abs($min - $cart_count) : 0;
    }

    /**
     * Returns the total cart total.
     * 
     * @return  int
     */
    public function getCartTotal()
    {
        $total = $this->woo_condition->getCartTotal();
        if ($total < 0)
        {
            return;
        }

        $min = (float) $this->parsedOptions->get('min', 0);
        
        if (!$min)
        {
            return $total;
        }
        
        $return = $min > $total ? (float) abs($min - $total) : 0;

        $filter = $this->parsedOptions->get('filter', '');

        if ($filter === 'percentage')
        {
            $return = (($min - $total) / $min) * 100;
            $return = $return > 0 ? round($return, 2) : 0;
        }

        return $return;
    }

    /**
     * Returns the total cart subtotal.
     * 
     * @return  int
     */
    public function getCartSubtotal()
    {
        $total = $this->woo_condition->getCartSubtotal();
        if ($total < 0)
        {
            return;
        }
        
        $min = (float) $this->parsedOptions->get('min', 0);

        if (!$min)
        {
            return $total;
        }
        
        $return = $min > $total ? (float) abs($min - $total) : 0;

        $filter = $this->parsedOptions->get('filter', '');

        if ($filter === 'percentage')
        {
            $return = (($min - $total) / $min) * 100;
            $return = $return > 0 ? round($return, 2) : 0;
        }

        return $return;
    }

    /**
     * Returns a product's stock.
     * 
     * @return  int
     */
    public function getStock()
    {
        if (!$product = (int) $this->parsedOptions->get('product', 0))
        {
            return;
        }

        if (!$stock = $this->fetchWooCondition()->getProductStock($product))
        {
            return;
        }

        return $stock;
    }
}