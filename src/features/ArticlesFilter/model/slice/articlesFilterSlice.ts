import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesFilterScheme, TFilterType } from 'features/ArticlesFilter/model/types/ArticlesFilterScheme';

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
  },
});

export const { actions: articlesFilterActions } = articlesFilterSlice;
export const { reducer: articlesFilterReducer } = articlesFilterSlice;
