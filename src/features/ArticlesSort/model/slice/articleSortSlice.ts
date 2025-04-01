import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOptionalRecord, TSortOrder } from '@/shared/types/utils';
import { TQuerySearchKeys } from '@/pages/ArticlesPage/model/types/articlesPageSchema';
import { checkSortField, checkSortOrder } from '../../utils/utils';
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

    setSortBySearchParams: (
      state,
      action: PayloadAction<TOptionalRecord<TQuerySearchKeys, string>>,
    ) => {
      const fieldParamsValue = action.payload?.sort;
      const orderParamsValue = action.payload?.order;

      if (fieldParamsValue && checkSortField(fieldParamsValue)) {
        state.field = fieldParamsValue;
      }

      if (orderParamsValue && checkSortOrder(orderParamsValue)) {
        state.order = orderParamsValue;
      }
    },
  },
});

export const { actions: articlesSortActions } = articleSortSlice;
export const { reducer: articlesSortReducer } = articleSortSlice;
