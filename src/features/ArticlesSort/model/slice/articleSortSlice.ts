import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSortOrder } from 'shared/types/types';
import { ArticlesSortScheme } from '../types/ArticlesSortScheme';
import { SortOrder } from '../../constants';

const initialState: ArticlesSortScheme = {
  order: SortOrder.ASC,
  field: '',
};

export const articleSortSlice = createSlice({
  name: 'articleSortSlice',
  initialState,
  reducers: {
    setSortOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.order = action.payload;
    },

    setSortField: (state, action) => {
      state.field = action.payload;
    },
  },
});

export const { actions: articleSortActions } = articleSortSlice;
export const { reducer: articleSortReducer } = articleSortSlice;
