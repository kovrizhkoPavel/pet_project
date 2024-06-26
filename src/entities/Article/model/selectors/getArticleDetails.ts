import { StateSchema } from 'shared/types/stateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from 'entities/Article';

const getArticleDetails = (store: StateSchema) => store.articleDetails;

export const getIsLoading = createSelector(
  getArticleDetails,
  (state: ArticleDetailsSchema | undefined) => !!state?.isLoading,
);
export const getData = createSelector(
  getArticleDetails,
  (state: ArticleDetailsSchema | undefined) => state?.data || null,
);
export const getError = createSelector(
  getArticleDetails,
  (state: ArticleDetailsSchema | undefined) => state?.error || '',
);
