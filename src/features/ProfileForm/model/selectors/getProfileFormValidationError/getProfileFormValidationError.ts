import { createSelector } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';

export const getProfileFormValidationError = createSelector(
  getProfileFormState,
  (state: ProfileScheme | undefined) => state?.validationError,
);
