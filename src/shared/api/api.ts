import axios from 'axios';
import { LocalStorageKey } from 'shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(LocalStorageKey.AUTH_DATA) || '',
  },
});
