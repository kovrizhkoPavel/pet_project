import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, UserScheme } from 'entities/User';
import { LocalStorageKey } from 'shared/constants';

const initialState: UserScheme = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, actions: PayloadAction<TUser>) => {
      state.authData = actions.payload;
      localStorage.setItem(LocalStorageKey.AUTH_DATA, JSON.stringify(state.authData));
    },

    initAuthData: (state) => {
      const authData = localStorage.getItem(LocalStorageKey.AUTH_DATA);

      if (authData) {
        state.authData = JSON.parse(authData);
      }
    },

    logout: (state) => {
      localStorage.removeItem(LocalStorageKey.AUTH_DATA);
      state.authData = null;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
