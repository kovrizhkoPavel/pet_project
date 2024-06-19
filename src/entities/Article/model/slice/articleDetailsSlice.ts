import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchArticleDetailsData.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = undefined;
  //     })
  //     .addCase(fetchArticleDetailsData.fulfilled, (state, action: PayloadAction<ArticleDetails>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchArticleDetailsData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
