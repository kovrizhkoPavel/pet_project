import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from 'pages/ProfilePage/model/selectors/getProfileState/getProfileState';
import { ProfileScheme } from 'entities/Profile';

export const getProfileError = createSelector(
  getProfileState,
  (state: ProfileScheme | undefined) => state?.error || '',
);
