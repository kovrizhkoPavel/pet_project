import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticlesView } from 'entities/Article/constants';

const getArticles = (state: StateScheme) => state.articles;

export const getIsLoading = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => !!state?.isLoading,
);

export const getError = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.error || '',
);

export const getView = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.view || ArticlesView.TILE,
);
