import { createSelector } from '@reduxjs/toolkit';
import { getAuthForm } from '../getAuthForm/getAuthForm';
import { AuthSchema } from '../../types/authSchema';

export const getPassword = createSelector(
  getAuthForm,
  (authState: AuthSchema) => authState?.password || '',
);
