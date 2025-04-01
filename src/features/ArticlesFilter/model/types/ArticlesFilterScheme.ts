import { TObjectValue } from '@/shared/types/utils';
import { FilterType } from '../../constants';

export type TFilterType = TObjectValue<typeof FilterType>;

export type ArticlesFilterScheme = {
  filterType?: TFilterType;
};
