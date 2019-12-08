import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const ProductStack = createStackNavigator({
    Product : {
        screen : ProductScreen
    },
    ProductDetailScreen
});

export default ProductStack;