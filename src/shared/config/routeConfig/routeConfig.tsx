import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AdminPage } from '@/pages/AdminPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { TUserRole, UserRole } from '@/entities/User';
import { RoutePath } from './constants';

export type TRouteProps = RouteProps & {
  isOnlyAuth?: boolean;
  roles?: TUserRole[];
};

export const routeConfig: TRouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.admin,
    element: <AdminPage />,
    isOnlyAuth: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    isOnlyAuth: true,
  },
  {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    isOnlyAuth: true,
  },
  {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    isOnlyAuth: true,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
