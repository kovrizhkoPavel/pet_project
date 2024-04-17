import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme, TProfile } from 'entities/Profile/types/profile';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';

const initialState: ProfileScheme = {
  readonly: true,
  isLoading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action) => {
      state.readonly = action.payload;
    },
    reset: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<TProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
