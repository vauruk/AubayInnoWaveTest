import {StackRoute} from '../types';
import {SignInRoutes} from './types';
import {Splash} from '../../views';

/**
 * Essa navegacao seria caso fosse necessário incluir athentication
 */
const routes: StackRoute[] = [
  {
    name: SignInRoutes.Splash,
    component: () => <Splash />,
    options: {
      animationEnabled: false,
      headerTransparent: true,
    },
  },
];

export {routes};
