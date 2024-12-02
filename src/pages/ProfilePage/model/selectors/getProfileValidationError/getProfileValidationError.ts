import { createSelector } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { getProfileState } from '../getProfileState/getProfileState';

export const getProfileValidationError = createSelector(
  getProfileState,
  (state: ProfileScheme | undefined) => state?.validationError,
);
