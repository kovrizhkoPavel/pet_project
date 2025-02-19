import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from '@/entities/Article/model/types/article';
import {
  fetchGetArticlesRecommendations,
} from '../services/fetchGetArticlesRecommendations/fetchGetArticlesRecommendations';
import { ArticlesRecommendationsScheme } from '../types/ArticlesRecommendationsScheme';

const initialState: ArticlesRecommendationsScheme = {
  articles: [],
  isLoading: false,
  error: '',
};

export const articlesRecommendationsSlice = createSlice({
  name: 'articlesRecommendationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetArticlesRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchGetArticlesRecommendations.fulfilled,
        (state, action: PayloadAction<TArticle[]>) => {
          state.articles = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchGetArticlesRecommendations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articlesRecommendationsActions } = articlesRecommendationsSlice;
export const { reducer: articlesRecommendationsReducer } = articlesRecommendationsSlice;
