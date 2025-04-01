import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKey } from '@/shared/constants/localstorage';
import { TUser, UserScheme } from '../types/userScheme';

const initialState: UserScheme = {
  _isInit: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, actions: PayloadAction<TUser>) => {
      state.authData = actions.payload;
      localStorage.setItem(
        LocalStorageKey.AUTH_DATA,
        JSON.stringify(state.authData),
      );
    },

    initAuthData: (state) => {
      const authData = localStorage.getItem(LocalStorageKey.AUTH_DATA);

      if (authData) {
        state.authData = JSON.parse(authData);
      }
      state._isInit = true;
    },

    logout: (state) => {
      localStorage.removeItem(LocalStorageKey.AUTH_DATA);
      state.authData = null;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
