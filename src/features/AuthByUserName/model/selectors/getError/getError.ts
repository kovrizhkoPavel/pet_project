import { createSelector } from '@reduxjs/toolkit';
import { AuthSchema } from 'features/AuthByUserName';
import { getAuthForm } from '../getAuthForm/getAuthForm';

export const getError = createSelector(
  getAuthForm,
  (state: AuthSchema) => state?.error || '',
);
