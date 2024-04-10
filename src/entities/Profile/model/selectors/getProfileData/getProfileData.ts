import { createSelector } from '@reduxjs/toolkit';
import { getProfileState } from 'entities/Profile/model/selectors/getProfileState/getProfileState';
import { ProfileScheme } from 'entities/Profile';

export const getProfileData = createSelector(
  getProfileState,
  (state: ProfileScheme | undefined) => state?.data,
);
