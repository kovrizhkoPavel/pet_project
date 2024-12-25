import { createSelector } from '@reduxjs/toolkit';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';
import { ProfileFormScheme } from '../../types/profileFormScheme';

export const getProfileInitialData = createSelector(
  getProfileFormState,
  (state: ProfileFormScheme | undefined) => state?.initialData,
);
