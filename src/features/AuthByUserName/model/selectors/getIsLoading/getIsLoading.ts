import { createSelector } from '@reduxjs/toolkit';
import { getAuthForm } from '../getAuthForm/getAuthForm';
import { AuthSchema } from '../../types/authSchema';

export const getIsLoading = createSelector(
  getAuthForm,
  (authState: AuthSchema | undefined) => authState?.isLoading,
);
