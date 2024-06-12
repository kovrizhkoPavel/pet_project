import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RoutePath } from './constants';

export type TRouteProps = RouteProps & {isOnlyAuth?: boolean}

export const routeConfig: TRouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.profile,
    element: <ProfilePage />,
    isOnlyAuth: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
