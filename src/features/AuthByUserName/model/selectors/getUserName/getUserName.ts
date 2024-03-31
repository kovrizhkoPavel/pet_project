import { createSelector } from '@reduxjs/toolkit';
import { getState } from '../getState/getState';
import { AuthSchema } from '../../types/authSchema';

export const getUserName = createSelector(getState, (store: AuthSchema) => store.userName);
