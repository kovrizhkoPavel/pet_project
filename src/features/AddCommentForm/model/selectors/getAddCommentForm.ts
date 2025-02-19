import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/shared/types/stateScheme';
import { AddCommentFormScheme } from '../types/AddCommentFormScheme';

const getAddCommentForm = (state: StateScheme) => state?.articleDetailsPage?.addComment;

export const getText = createSelector(
  getAddCommentForm,
  (state: AddCommentFormScheme | undefined) => state?.text || '',
);

export const getIsLoading = createSelector(
  getAddCommentForm,
  (state: AddCommentFormScheme | undefined) => !!state?.isLoading,
);

export const getError = createSelector(
  getAddCommentForm,
  (state: AddCommentFormScheme | undefined) => state?.error || '',
);

export const getIsActive = createSelector(
  getAddCommentForm,
  (state: AddCommentFormScheme | undefined) => !!state?.isActive,
);
