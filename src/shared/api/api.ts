import axios from 'axios';
import { LocalStorageKey } from 'shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = localStorage.getItem(LocalStorageKey.AUTH_DATA) || '';
  }

  return config;
});
