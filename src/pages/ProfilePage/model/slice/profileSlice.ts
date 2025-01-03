import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme, TProfile } from 'entities/Profile/types/profile';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';
import { fetchGetProfileData } from '../service/fetchGetProfileData/fetchGetProfileData';

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

    changeProfile: (state, action) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },

    resetProfile: (state) => {
      state.readonly = true;
      state.form = { ...state.data };
    },

    reset: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchGetProfileData.fulfilled,
        (state, action: PayloadAction<TProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchGetProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.validationError = undefined;
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<TProfile>) => {
          state.isLoading = false;
          state.readonly = true;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.error = action.payload;
          return;
        }
        state.validationError = action.payload;
      });
  },
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
