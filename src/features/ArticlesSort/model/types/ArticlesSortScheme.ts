import { TObjectValue, TSortOrder } from '@/shared/types/utils';
import { SortField } from '../../constants';

export type TSortField = TObjectValue<typeof SortField>;

export type ArticlesSortScheme = {
  order: TSortOrder;
  field: TSortField;
};
