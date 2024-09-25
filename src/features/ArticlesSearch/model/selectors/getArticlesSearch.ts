import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';

const getArticlesSearch = (state: StateScheme) => state.articlesPage?.search;

export const getSearchValue = createSelector(
  getArticlesSearch,
  (state) => state?.value ?? '',
);
