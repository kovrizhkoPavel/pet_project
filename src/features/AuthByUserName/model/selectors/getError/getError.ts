import { createSelector } from '@reduxjs/toolkit';
import { AuthSchema } from 'features/AuthByUserName';
import { getState } from '../getState/getState';

export const getError = createSelector(
  getState,
  (state: AuthSchema) => state.error,
);
