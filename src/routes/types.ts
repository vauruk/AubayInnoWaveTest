import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {StackNavigationOptions} from '@react-navigation/stack';

import {RootRoutes} from './Root';
import {SignInRoutes} from './SignIn';
import {HomeRoutes} from './Home';

export type routeName = RootRoutes | SignInRoutes | HomeRoutes;

export interface BaseRoute {
  name: routeName;
  component: () => any;
}

export interface StackRoute extends BaseRoute {
  options?: StackNavigationOptions;
}
export interface DrawerRoute extends BaseRoute {
  options?: DrawerNavigationOptions;
}
