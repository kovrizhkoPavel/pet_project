import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from 'entities/Article/model/types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsSchema = {
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
