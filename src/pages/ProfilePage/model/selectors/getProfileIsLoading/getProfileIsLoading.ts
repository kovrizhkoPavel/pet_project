import { createSelector } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileIsLoading = createSelector(
  getProfileState,
  (state: ProfileScheme | undefined) => !!state?.isLoading,
);
