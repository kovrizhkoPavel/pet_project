import { createSelector } from '@reduxjs/toolkit';
import { getState } from '../getState/getState';
import { AuthSchema } from '../../types/authSchema';

export const getIsLoading = createSelector(
  getState,
  (authState: AuthSchema) => authState.isLoading,
);
