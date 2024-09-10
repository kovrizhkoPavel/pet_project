import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

    reset: () => initialState,
  },
});

export const { actions: articlesSearchActions } = ArticlesSearchSlice;
export const { reducer: articlesSearchReducer } = ArticlesSearchSlice;
