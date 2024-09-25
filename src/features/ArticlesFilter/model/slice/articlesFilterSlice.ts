import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesFilterScheme, TFilterType } from 'features/ArticlesFilter/model/types/ArticlesFilterScheme';
import { TQuerySearchKeys } from 'pages/ArticlesPage/model/types/articlesPageSchema';
import { TOptionalRecord } from 'shared/types/types';
import { checkFilterType } from '../../utils/utils';

const initialState: ArticlesFilterScheme = {
  filterType: undefined,
};

export const articlesFilterSlice = createSlice({
  name: 'articlesFilterSlice',
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<TFilterType | undefined>) => {
      state.filterType = action.payload;
    },

    setFilterTypeBySearchParams: (
      state,
      action: PayloadAction<TOptionalRecord<TQuerySearchKeys, string>>,
    ) => {
      const searchParamsValue = action.payload?.type;

      if (!searchParamsValue) return;

      if (checkFilterType(searchParamsValue)) {
        state.filterType = searchParamsValue;
      }
    },
  },
});

export const { actions: articlesFilterActions } = articlesFilterSlice;
export const { reducer: articlesFilterReducer } = articlesFilterSlice;
