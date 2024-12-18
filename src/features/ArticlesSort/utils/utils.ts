import { TSortOrder } from 'shared/types/utils';
import { TSortField } from '../model/types/ArticlesSortScheme';
import { SortField, SortOrder } from '../constants';

export const checkSortField = (field: string): field is TSortField => Object
  .values(SortField)
  .some((sortField) => sortField === field);

export const checkSortOrder = (order: string): order is TSortOrder => Object
  .values(SortOrder)
  .some((sortOrder) => sortOrder === order);
