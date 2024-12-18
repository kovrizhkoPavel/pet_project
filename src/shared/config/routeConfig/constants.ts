import { TObjectValue } from 'shared/types/utils';

const AppRoute = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  NOT_FOUND: 'not_found',
} as const;

type TAppRouteValues = TObjectValue<typeof AppRoute>

export const RoutePath: Record<TAppRouteValues, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: `/${AppRoute.ABOUT}`,
  [AppRoute.PROFILE]: `/${AppRoute.PROFILE}/`,
  [AppRoute.ARTICLES]: `/${AppRoute.ARTICLES}`,
  [AppRoute.ARTICLE_DETAILS]: `/${AppRoute.ARTICLES}/`,
  [AppRoute.NOT_FOUND]: '*',
};
