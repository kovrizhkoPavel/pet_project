import { createSelector } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { getProfileFormState } from '../getProfileFormState/getProfileFormState';

export const getProfileFormReadonly = createSelector(
  getProfileFormState,
  (state: ProfileScheme | undefined) => !!state?.readonly,
);
