import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MyCalculator from '../screens/MyCalculator';
import HisCalculator from '../screens/HisCalculator';

const mainTab = createBottomTabNavigator({
    MyCalculator,
    HisCalculator
});

export default createAppContainer(mainTab);