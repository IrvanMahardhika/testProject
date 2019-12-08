import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const MainNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeScreen
    },
    RegisterScreen,
    LoginScreen
});

export default MainNavigator;