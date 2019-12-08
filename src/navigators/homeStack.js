import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductStack from './productStack'
// import ProductScreen from '../screens/ProductScreen';

const HomeStack = createStackNavigator({
    Home : {
        screen : HomeScreen
    },
    ProfileScreen,
    ProductStack
});

export default HomeStack;