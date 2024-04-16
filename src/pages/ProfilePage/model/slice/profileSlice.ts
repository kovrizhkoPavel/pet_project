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
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<TProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );

    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: profileReducers, actions: profileActions } = profileSlice;
