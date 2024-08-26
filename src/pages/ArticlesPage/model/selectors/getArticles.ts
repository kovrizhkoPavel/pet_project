import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { DEFAULT_PAGE_NUM, PageLimit } from 'pages/ArticlesPage/constants';
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
