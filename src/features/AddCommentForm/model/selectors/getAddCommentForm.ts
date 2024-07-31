import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { AddCommentFormScheme } from '../types/AddCommentFormScheme';

const getAddCommentForm = (state: StateScheme) => state?.addCommentForm;

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
