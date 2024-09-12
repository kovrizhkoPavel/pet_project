import { getQueryParams } from './getQueryParams';

export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
