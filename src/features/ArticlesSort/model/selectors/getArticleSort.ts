import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';
import { ArticlesSortScheme } from 'features/ArticlesSort/model/types/ArticlesSortScheme';
import { SortField, SortOrder } from 'features/ArticlesSort/constants';

const getArticleSort = (state: StateScheme) => state.articlesPage?.sort;

export const getSortOrder = createSelector(
  getArticleSort,
  (state: ArticlesSortScheme | undefined) => state?.order || SortOrder.ASC,
);

export const getSortField = createSelector(
  getArticleSort,
  (state: ArticlesSortScheme | undefined) => state?.field || SortField.CREATED,
);
