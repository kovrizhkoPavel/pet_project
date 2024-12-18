import {
  BaseQueryFn, createApi, FetchArgs, fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { LocalStorageKey } from 'shared/constants/localstorage';
import { TCustomError } from 'shared/types/api';

type TBaseQuery = BaseQueryFn<string | FetchArgs, unknown, TCustomError>;

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const authData = localStorage.getItem(LocalStorageKey.AUTH_DATA);
      if (authData) {
        headers.set('Authorization', authData);
      }
      return headers;
    },
  }) as TBaseQuery,
  endpoints: () => ({}),
});
