import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { DEFAULT_PAGE_NUM, PageLimit } from 'pages/ArticlesPage/constants';
import { ArticlesView } from 'entities/Article/constants';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const getArticles = (state: StateScheme) => state?.articles;

export const getPageNum = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.pageNum || DEFAULT_PAGE_NUM,
);

export const getLimit = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.limit || PageLimit.TILE,
);

export const getHasMore = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => !!state?.hasMore,
);

export const getIsLoading = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => !!state?.isLoading,
);

export const getIsInitialized = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => !!state?.isInitialized,
);

export const getError = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.error || '',
);

export const getView = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.view || ArticlesView.TILE,
);
