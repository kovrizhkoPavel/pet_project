import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/shared/types/stateScheme';
import { ArticleDetailsScheme } from '../types/articleDetailsScheme';

const getArticleDetails = (store: StateScheme) =>
  store.articleDetailsPage?.details;

export const getIsLoading = createSelector(
  getArticleDetails,
  (state: ArticleDetailsScheme | undefined) => !!state?.isLoading,
);
export const getData = createSelector(
  getArticleDetails,
  (state: ArticleDetailsScheme | undefined) => state?.data || null,
);
export const getError = createSelector(
  getArticleDetails,
  (state: ArticleDetailsScheme | undefined) => state?.error || '',
);
