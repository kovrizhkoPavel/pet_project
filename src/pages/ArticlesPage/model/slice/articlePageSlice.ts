import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle, TArticlesView } from 'entities/Article/model/types/article';
import { StateScheme } from 'shared/types/stateScheme';
import { ArticlesView } from 'entities/Article/constants';
import { LocalStorageKey } from 'shared/constants/localstorage';
import { fetchGetArticleList } from '../services/fetchGetArticleList/fetchGetArticleList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const adapterInitialState = {
  ids: [],
  entities: {},
};

const articlePageAdapter = createEntityAdapter({
  selectId: (article: TArticle) => article.id,
});

export const getArticles = articlePageAdapter.getSelectors<StateScheme>(
  (state) => state.articles || adapterInitialState,
);

const initialState: ArticlesPageSchema = {
  ...adapterInitialState,
  isLoading: false,
  error: '',
  view: ArticlesView.TILE,
};

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState,
  reducers: {
    setView(state, action) {
      state.view = action.payload;
      localStorage.setItem(LocalStorageKey.ARTICLE_VIEW, action.payload);
    },

    initViewState(state) {
      state.view = localStorage.getItem(
        LocalStorageKey.ARTICLE_VIEW,
      ) as TArticlesView || ArticlesView.TILE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchGetArticleList.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.isLoading = false;
        state.error = '';
        articlePageAdapter.setAll(state, action.payload);
      })
      .addCase(fetchGetArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlePageActions } = articlePageSlice;
export const { reducer: articlePageReducer } = articlePageSlice;
