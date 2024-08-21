import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

const getArticles = (state: StateScheme) => state.articles;

export const getIsLoading = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => !!state?.isLoading,
);

export const getError = createSelector(
  getArticles,
  (state: ArticlesPageSchema | undefined) => state?.error || '',
);
