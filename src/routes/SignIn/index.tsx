import React from 'react';
import {SignInStackParamsList} from './types';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './config';

const Stack = createStackNavigator<SignInStackParamsList>();

const SignInNavigator = () => (
  <Stack.Navigator headerMode="none">
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

export default SignInNavigator;
