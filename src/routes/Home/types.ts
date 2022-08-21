export enum HomeRoutes {
  index = '/home',
  HomeLogged = '/home/logged',
  EditDevice = '/home/EditDevice',
  Splash = '/home/Splash',
}

export type HomeStackParamsList = {
  [HomeRoutes.HomeLogged]: undefined;
  [HomeRoutes.index]: undefined;
  [HomeRoutes.Splash]: undefined;
};
