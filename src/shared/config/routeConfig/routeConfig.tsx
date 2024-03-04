import { RouteProps } from 'react-router-dom';
import { TObjectValue } from 'shared/types/types';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

const AppRoute = {
  MAIN: 'main',
  ABOUT: 'about',
  NOT_FOUND: 'not_found',
} as const;

type TAppRouteValues = TObjectValue<typeof AppRoute>

const RoutePath: Record<TAppRouteValues, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: `/${AppRoute.ABOUT}`,
  [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
