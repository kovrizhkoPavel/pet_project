import { createSlice } from '@reduxjs/toolkit';
import { UserScheme } from 'entities/User';

const initialState: UserScheme = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
