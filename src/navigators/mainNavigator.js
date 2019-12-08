import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeStack from './homeStack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const MainNavigator = createBottomTabNavigator({
    Home : {
        screen : HomeStack,
        path: 'Home'
    },
    RegisterScreen,
    LoginScreen
});

export default MainNavigator;