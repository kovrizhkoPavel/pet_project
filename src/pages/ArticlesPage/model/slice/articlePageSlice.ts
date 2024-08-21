import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle } from 'entities/Article/model/types/article';
import { StateScheme } from 'shared/types/stateScheme';
import { ArticlesView } from 'entities/Article/constants';
import { fetchGetArticleList } from '../services/fetchGetArticleList/fetchGetArticleList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlePageAdapter = createEntityAdapter({
  selectId: (article: TArticle) => article.id,
});

export const getArticles = articlePageAdapter.getSelectors<StateScheme>(
  (state) => state.articles || articlePageAdapter.getInitialState(),
);

const initialState: ArticlesPageSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: '',
  view: ArticlesView.TILE,
};

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchGetArticleList.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.isLoading = true;
        state.error = '';
        articlePageAdapter.setAll(state, action.payload);
      })
      .addCase(fetchGetArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: Actions } = articlePageSlice;
export const { reducer: Reducer } = articlePageSlice;
