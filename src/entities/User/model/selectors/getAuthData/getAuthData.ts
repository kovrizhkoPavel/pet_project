import { createSelector } from '@reduxjs/toolkit';
import { UserScheme } from '../../types/userScheme';
import { getUserState } from '../getUserState/getUserState';

export const getAuthData = createSelector(
  getUserState,
  (state: UserScheme) => state.authData,
);
