import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Root';
import type {RootState} from '../store';
import {useSelector} from 'react-redux';

const RouterNavigation: React.FC = () => {
  const token = useSelector((state: RootState) => state.deviceForm.token);

  return (
    <NavigationContainer>
      <RootNavigator token={token} />
    </NavigationContainer>
  );
};

export default RouterNavigation;
