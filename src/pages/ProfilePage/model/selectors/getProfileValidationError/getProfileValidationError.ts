import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from 'pages/ProfilePage/model/selectors/getProfileState/getProfileState';
import { ProfileScheme } from 'entities/Profile';

export const getProfileValidationError = createSelector(
  getProfileState,
  (state: ProfileScheme | undefined) => state?.validationError,
);
