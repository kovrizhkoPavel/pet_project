import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProfile } from '@/entities/Profile';
import { TProfileValidationError } from '@/entities/Profile/types/profile';
import { ProfileFormScheme } from '../types/profileFormScheme';

const initialState: ProfileFormScheme = {
  readonly: true,
};

export const profileFormSlice = createSlice({
  name: 'profileFormSlice',
  initialState,
  reducers: {
    setInitialData: (state, action: PayloadAction<TProfile>) => {
      state.initialData = action.payload;
      state.formData = action.payload;
    },

    setReadonly: (state, action) => {
      state.readonly = action.payload;
    },

    setValidationErrors: (state, action: PayloadAction<TProfileValidationError | undefined>) => {
      state.validationError = action.payload;
    },

    changeProfile: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },

    resetProfile: (state) => {
      state.readonly = true;
      state.formData = { ...state.initialData };
    },

    reset: () => initialState,
  },
});

export const { actions: profileFormActions } = profileFormSlice;
export const { reducer: profileFormReducer } = profileFormSlice;
