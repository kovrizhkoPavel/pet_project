import { createSelector } from '@reduxjs/toolkit';
import { AuthSchema } from '../../types/authSchema';
import { getAuthForm } from '../getAuthForm/getAuthForm';

export const getError = createSelector(
  getAuthForm,
  (state: AuthSchema | undefined) => state?.error || '',
);
