import { TOptionalRecord } from 'shared/types/utils';

export const getQueryParams = (params: TOptionalRecord<string, string>):string => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (!value) {
      searchParams.delete(key);
      return;
    }
    searchParams.set(key, value);
  });

  return `?${searchParams.toString()}`;
};
