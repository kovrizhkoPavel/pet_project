import { createSelector } from '@reduxjs/toolkit';
import { ProfileFormScheme } from '../../types/profileFormScheme';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';

export const getProfileFormValidationError = createSelector(
  getProfileFormState,
  (state: ProfileFormScheme | undefined) => state?.validationError,
);
