import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/shared/types/stateScheme';
import { ArticleCommentsScheme } from '../types/ArticleCommentScheme';

const getArticleComments = (state: StateScheme) => state.articleDetailsPage?.comments;

export const getIsLoading = createSelector(
  getArticleComments,
  (state: ArticleCommentsScheme | undefined) => !!state?.isLoading,
);
export const getError = createSelector(
  getArticleComments,
  (state: ArticleCommentsScheme | undefined) => state?.error || '',
);
