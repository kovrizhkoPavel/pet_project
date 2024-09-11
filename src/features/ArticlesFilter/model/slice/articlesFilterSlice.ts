import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesFilterScheme, TFilterType } from 'features/ArticlesFilter/model/types/ArticlesFilterScheme';

const initialState: ArticlesFilterScheme = {
  filterTypes: [],
};

export const articlesFilterSlice = createSlice({
  name: 'articlesFilterSlice',
  initialState,
  reducers: {
    addFilterTypes: (state, action: PayloadAction<TFilterType>) => {
      state.filterTypes = [action.payload, ...state.filterTypes];
    },

    deleteFilterTypes: (state, action: PayloadAction<TFilterType>) => {
      state.filterTypes = state.filterTypes.filter((type) => type !== action.payload);
    },
  },
});

export const { actions: articlesFilterActions } = articlesFilterSlice;
export const { reducer: articlesFilterReducer } = articlesFilterSlice;
