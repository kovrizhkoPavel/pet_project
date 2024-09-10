import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSortOrder } from 'shared/types/types';
import { ArticlesSortScheme } from '../types/ArticlesSortScheme';
import { SortField, SortOrder } from '../../constants';

const initialState: ArticlesSortScheme = {
  order: SortOrder.ASC,
  field: SortField.CREATED,
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

export const { actions: articlesSortActions } = articleSortSlice;
export const { reducer: articlesSortReducer } = articleSortSlice;
