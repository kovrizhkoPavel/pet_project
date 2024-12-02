import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { SortField, SortOrder } from '../../constants';
import { ArticlesSortScheme } from '../types/ArticlesSortScheme';

const getArticleSort = (state: StateScheme) => state.articlesPage?.sort;

export const getSortOrder = createSelector(
  getArticleSort,
  (state: ArticlesSortScheme | undefined) => state?.order || SortOrder.ASC,
);

export const getSortField = createSelector(
  getArticleSort,
  (state: ArticlesSortScheme | undefined) => state?.field || SortField.CREATED,
);
