import { FilterType } from '../constants';
import { TFilterType } from '../model/types/ArticlesFilterScheme';

export const checkFilterType = (type: string): type is TFilterType => Object
  .values(FilterType)
  .some((filterType) => filterType === type);
