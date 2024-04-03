import { createSelector } from '@reduxjs/toolkit';
import { getState } from '../getState/getState';
import { AuthSchema } from '../../types/authSchema';

export const getPassword = createSelector(
  getState,
  (authState: AuthSchema) => authState?.password || '',
);
