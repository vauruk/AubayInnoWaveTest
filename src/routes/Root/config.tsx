import React from 'react';
import {StackRoute} from '../types';
import SignInNavigator from '../SignIn';
import {SignInRoutes} from '../SignIn/types';
import HomeNavigator from '../Home';
import {HomeRoutes} from '../Home/types';

const authorizedRoutes: StackRoute[] = [
  {
    name: HomeRoutes.index,
    component: () => <HomeNavigator />,
    options: {
      headerTitle: 'Home',
    },
  },
];

const unauthorizedRoutes: StackRoute[] = [
  {
    name: SignInRoutes.index,
    component: () => <SignInNavigator />,
  },
];

export {authorizedRoutes, unauthorizedRoutes};
