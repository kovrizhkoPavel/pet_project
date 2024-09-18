import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from '../types/article';
import { ArticleDetailsScheme } from '../types/articleDetailsScheme';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsScheme = {
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        console.log('slice');
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<TArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
