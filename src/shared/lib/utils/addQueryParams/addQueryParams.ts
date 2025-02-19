import { TOptionalRecord } from '@/shared/types/utils';
import { getQueryParams } from './getQueryParams';

export const addQueryParams = (params: TOptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
