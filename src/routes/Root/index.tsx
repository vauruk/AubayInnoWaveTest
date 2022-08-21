import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Props, RootStackParamsList} from './types';
import {StackRoute} from '../types';
import {unauthorizedRoutes, authorizedRoutes} from './config';

const RootStack = createStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC<Props> = ({token}: Props) => {
  const renderRoutes = (routes: StackRoute[]) => {
    return routes.map(route => (
      <RootStack.Screen
        key={route.name}
        name={route.name as any}
        options={route.options}>
        {route.component}
      </RootStack.Screen>
    ));
  };

  const isUserAuthorized = (isAuthorized: boolean) => {
    if (isAuthorized) {
      return renderRoutes(authorizedRoutes);
    }
    return renderRoutes(unauthorizedRoutes);
  };
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isUserAuthorized(!!token)}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
