import { TObjectValue } from 'shared/types/types';

const AppRoute = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  NOT_FOUND: 'not_found',
} as const;

type TAppRouteValues = TObjectValue<typeof AppRoute>

export const RoutePath: Record<TAppRouteValues, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: `/${AppRoute.ABOUT}`,
  [AppRoute.PROFILE]: `/${AppRoute.PROFILE}`,
  [AppRoute.NOT_FOUND]: '*',
};
