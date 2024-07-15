import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';
import { TArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<TArticle, string, TThunkApiConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<TArticle>(`${ArticleUrl.GET_ARTICLE}/${id}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
