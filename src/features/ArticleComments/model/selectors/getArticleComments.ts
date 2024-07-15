import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { ArticleCommentsScheme } from 'features/ArticleComments';

const getArticleComments = (state: StateScheme) => state.articleComments;

export const getIsLoading = createSelector(
  getArticleComments,
  (state: ArticleCommentsScheme | undefined) => !!state?.isLoading,
);
export const getError = createSelector(
  getArticleComments,
  (state: ArticleCommentsScheme | undefined) => state?.error || '',
);
