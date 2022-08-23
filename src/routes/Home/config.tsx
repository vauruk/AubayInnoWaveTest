import React from 'react';
import {StackRoute} from '../types';
import {HomeRoutes} from './types';
import {EditDevice, Home, Splash} from '../../views';
import {color} from '../../theme';
import ButtonAdd from '../../views/Home/headerButton';
import BackButtonNav from '../../components/BackButtonNav';
import ChangeMode from '../../views/Home/ChangeMode';

const optionsHeader: Element = (
  transparent: boolean,
  title: string,
  headerRight: any,
  backButton: any,
) => {
  return {
    headerShown: true,
    headerTintColor: color.primary,
    headerStyle: {
      backgroundColor: !transparent ? undefined : 'transparent',
    },
    headerTransparent: transparent,
    headerTitleAlign: 'center',
    headerShadowVisible: false,
    headerBackTitleVisible: false,
    title: title || '',
    headerRight: () => headerRight,
    headerLeft: () => backButton,
  };
};

const routes: StackRoute[] = [
  {
    name: HomeRoutes.Splash,
    component: () => <Splash />,
    options: optionsHeader(true, ''),
  },
  {
    name: HomeRoutes.HomeLogged,
    component: () => <Home />,
    options: optionsHeader(false, 'List Device', <ButtonAdd />, <ChangeMode />),
  },
  {
    name: HomeRoutes.EditDevice,
    component: props => <EditDevice {...props} />,
    options: optionsHeader(false, 'Add Device', undefined, <BackButtonNav />),
  },
];

export {routes};
