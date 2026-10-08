<?php
    
    class ProductDAO {

        public static function getProducts() {
            $items = explode("\n", file_get_contents("data/products.txt"));
			$items = array_filter($items, fn ($item) => strlen($item) > 0);
			
			return $items;
        }

    }