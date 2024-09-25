import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticle, TArticlesView } from 'entities/Article/model/types/article';
import { StateScheme } from 'shared/types/stateScheme';
import { ArticlesView } from 'entities/Article/constants';
import { LocalStorageKey } from 'shared/constants/localstorage';
import { TOptionalRecord } from 'shared/types/types';
import { DEFAULT_PAGE_NUM, PageLimit } from '../../constants';
import { fetchGetArticleList } from '../services/fetchGetArticleList/fetchGetArticleList';
import { ArticlesPageSchema, TQuerySearchKeys } from '../types/articlesPageSchema';

const adapterInitialState = {
  ids: [],
  entities: {},
};

const articlesPageAdapter = createEntityAdapter({
  selectId: (article: TArticle) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateScheme>(
  (state) => state?.articlesPage?.articles || adapterInitialState,
);

const initialState: ArticlesPageSchema = {
  ...adapterInitialState,
  isLoading: false,
  isInitialized: false,
  error: '',
  view: ArticlesView.TILE,
  pageNum: DEFAULT_PAGE_NUM,
  limit: PageLimit.TILE,
  hasMore: true,
};

export const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState,
  reducers: {
    setView(state, action) {
      state.view = action.payload;
      localStorage.setItem(LocalStorageKey.ARTICLE_VIEW, action.payload);
    },

    setPageNum(state, action) {
      state.pageNum = action.payload;
    },

    setPageBySearchParamsNum(
      state,
      action: PayloadAction<TOptionalRecord<TQuerySearchKeys, string>>,
    ) {
      const pageNum = action.payload?.page;
      if (!pageNum) return;

      state.pageNum = Number.isNaN(+pageNum) ? DEFAULT_PAGE_NUM : +pageNum;
    },

    initViewState(state) {
      state.view = localStorage.getItem(
        LocalStorageKey.ARTICLE_VIEW,
      ) as TArticlesView || ArticlesView.TILE;

      state.limit = state.view === ArticlesView.TILE
        ? PageLimit.TILE
        : PageLimit.LIST;

      state.isInitialized = true;
    },

    resetPageNum(state) {
      state.pageNum = DEFAULT_PAGE_NUM;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetArticleList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchGetArticleList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = '';
        state.hasMore = action.payload.length === state.limit;

        if (action.meta.arg?.replace) {
          articlesPageAdapter.setAll(state, action.payload);
          return;
        }

        articlesPageAdapter.addMany(state, action.payload);
      })
      .addCase(fetchGetArticleList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
