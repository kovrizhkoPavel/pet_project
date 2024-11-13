import { createSlice } from '@reduxjs/toolkit';
import { ArticlePageScheme } from '../types/ArticleDetailsScheme';

const initialState: ArticlePageScheme = {
  _isInit: false,
};

const articleDetailsPageSlice = createSlice({
  name: 'articleDetailsPageSlice',
  initialState,
  reducers: {
    init: (state) => {
      state._isInit = true;
    },
  },
});

export const { actions: articleDetailsPageActions } = articleDetailsPageSlice;
export const { reducer: articleDetailsPageReducer } = articleDetailsPageSlice;
