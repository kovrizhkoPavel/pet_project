import { TObjectValue } from 'shared/types/types';
import { FilterType } from '../../constants';

export type TFilterType = TObjectValue<typeof FilterType>;

export type ArticlesFilterScheme = {
  filterTypes: TFilterType[];
}
