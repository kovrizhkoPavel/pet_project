import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/authSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: AuthSchema = {
  userName: '',
  password: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, actions: PayloadAction<string>) => {
      state.userName = actions.payload;
    },

    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },

    reset: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
