import { createSelector } from '@reduxjs/toolkit';
import { ProfileFormScheme } from '../../types/profileFormScheme';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';

export const getProfileFormReadonly = createSelector(
  getProfileFormState,
  (state: ProfileFormScheme | undefined) => !!state?.readonly,
);
