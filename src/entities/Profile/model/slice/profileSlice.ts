import { createSlice } from '@reduxjs/toolkit';
import { ProfileScheme } from '../types/profile';

const initialState: ProfileScheme = {
  readonly: true,
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { reducer: profileReducers, actions: profileActions } = profileSlice;
