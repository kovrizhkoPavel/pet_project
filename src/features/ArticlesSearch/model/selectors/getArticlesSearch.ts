import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/shared/types/stateScheme';

const getArticlesSearch = (state: StateScheme) => state.articlesPage?.search;

export const getSearchValue = createSelector(
  getArticlesSearch,
  (state) => state?.value ?? '',
);
