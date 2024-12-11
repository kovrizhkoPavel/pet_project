import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { LocalStorageKey } from 'shared/constants/localstorage';

export const rtkApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const authData = localStorage.getItem(LocalStorageKey.AUTH_DATA);
      if (authData) {
        headers.set('Authorization', authData);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
