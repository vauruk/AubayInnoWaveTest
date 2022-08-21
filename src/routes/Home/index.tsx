import React from 'react';
import {HomeStackParamsList} from './types';
import {routes} from './config';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeNavigator = () => (
  <Stack.Navigator>
    {routes.map(route => (
      <Stack.Screen
        key={route.name}
        name={route.name as any}
        options={route.options}>
        {route.component}
      </Stack.Screen>
    ))}
  </Stack.Navigator>
);

export default HomeNavigator;
