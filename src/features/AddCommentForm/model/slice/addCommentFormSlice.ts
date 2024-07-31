import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormScheme } from 'features/AddCommentForm/model/types/AddCommentFormScheme';

const initialState: AddCommentFormScheme = {};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },

    reset() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(.pending, (state) => {
    //   })
    //   .addCase(.fulfilled, (state, action: PayloadAction<TArticle>) => {
    //   })
    //   .addCase(fetchArticleById.rejected, (state, action) => {
    //   });
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
