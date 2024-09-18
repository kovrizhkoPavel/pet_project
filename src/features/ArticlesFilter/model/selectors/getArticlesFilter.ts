import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { ArticlesFilterScheme } from 'features/ArticlesFilter/model/types/ArticlesFilterScheme';

const getArticlesFilter = (state: StateScheme) => state.articlesPage?.filter;

export const getFilterTypes = createSelector(
  getArticlesFilter,
  (state: ArticlesFilterScheme | undefined) => state?.filterType,
);
