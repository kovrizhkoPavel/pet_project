import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOptionalRecord } from 'shared/types/types';
import { TQuerySearchKeys } from 'pages/ArticlesPage/model/types/articlesPageSchema';
import { ArticlesSearchScheme } from '../types/ArticlesSearchScheme';

const initialState: ArticlesSearchScheme = {
  value: '',
};

export const ArticlesSearchSlice = createSlice({
  name: 'ArticleSearchSlice',
  initialState,
  reducers: {
    setSearch: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },

    setSearchBySearchParams: (
      state,
      action: PayloadAction<TOptionalRecord<TQuerySearchKeys, string>>,
    ) => {
      const searchParamsValue = action.payload?.search;
      state.value = searchParamsValue ?? '';
    },

    reset: () => initialState,
  },
});

export const { actions: articlesSearchActions } = ArticlesSearchSlice;
export const { reducer: articlesSearchReducer } = ArticlesSearchSlice;
