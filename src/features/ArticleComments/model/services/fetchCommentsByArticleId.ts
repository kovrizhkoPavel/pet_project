import { createAsyncThunk } from '@reduxjs/toolkit';
import { TComment } from 'entities/Comment';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';

export const fetchCommentsByArticleId = createAsyncThunk<
  TComment[],
  string | undefined,
  TThunkApiConfig<string>
>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId, thinkAPI) => {
    const { extra, rejectWithValue } = thinkAPI;

    if (!articleId) {
      rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<TComment[]>(ArticleUrl.COMMENTS, {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
