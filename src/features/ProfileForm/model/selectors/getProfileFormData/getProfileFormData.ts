import { createSelector } from '@reduxjs/toolkit';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';
import { ProfileFormScheme } from '../../types/profileFormScheme';

export const getProfileFormData = createSelector(
  getProfileFormState,
  (state: ProfileFormScheme | undefined) => state?.formData,
);
