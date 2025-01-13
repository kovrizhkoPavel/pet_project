import { TObjectValue } from 'shared/types/utils';

const AppRoute = {
  MAIN: 'main',
  ADMIN: 'admin',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  FORBIDDEN: 'forbidden',
  NOT_FOUND: 'not_found',
} as const;

type TAppRouteValues = TObjectValue<typeof AppRoute>

export const RoutePath: Record<TAppRouteValues, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ADMIN]: `/${AppRoute.ADMIN}`,
  [AppRoute.PROFILE]: `/${AppRoute.PROFILE}/`,
  [AppRoute.ARTICLES]: `/${AppRoute.ARTICLES}`,
  [AppRoute.ARTICLE_DETAILS]: `/${AppRoute.ARTICLES}/`,
  [AppRoute.FORBIDDEN]: `/${AppRoute.FORBIDDEN}/`,
  [AppRoute.NOT_FOUND]: '*',
};
