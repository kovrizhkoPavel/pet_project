import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme, TProfile } from 'entities/Profile/types/profile';
import { updateProfileData } from 'pages/ProfilePage/model/service/updateProfileData/updateProfileData';
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
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<TProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
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
        state.error = action.payload;
      });
  },
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
