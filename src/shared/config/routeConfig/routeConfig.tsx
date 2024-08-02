import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
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
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    isOnlyAuth: true,
  }, {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    isOnlyAuth: true,
  }, {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    isOnlyAuth: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
