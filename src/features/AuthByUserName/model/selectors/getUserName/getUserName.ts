import { createSelector } from '@reduxjs/toolkit';
import { getAuthForm } from '../getAuthForm/getAuthForm';
import { AuthSchema } from '../../types/authSchema';

export const getUserName = createSelector(getAuthForm, (store: AuthSchema) => store?.userName || '');
