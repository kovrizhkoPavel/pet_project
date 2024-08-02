import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormScheme } from 'features/AddCommentForm/model/types/AddCommentFormScheme';

const initialState: AddCommentFormScheme = {
  isActive: false,
  isLoading: false,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setIsActive(state, action) {
      state.isActive = action.payload;
    },

    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },

    reset() {
      return initialState;
    },
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
