import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from '@/shared/types/stateScheme';
import { ArticleUrl } from '@/shared/constants/api';
import { TArticle } from '@/entities/Article/model/types/article';

const LIMIT = 5;

export const fetchGetArticlesRecommendations = createAsyncThunk<
  TArticle[],
  void,
  TThunkApiConfig<string>
>('ArticlePage/fetchGetArticleList', async (_, thinkAPI) => {
  const { extra, rejectWithValue } = thinkAPI;
  try {
    const response = await extra.api.get<TArticle[]>(ArticleUrl.ARTICLE, {
      params: {
        _expand: 'user',
        _limit: LIMIT,
      },
    });

    return response?.data ? response.data : rejectWithValue('error');
  } catch (err) {
    return rejectWithValue('error');
  }
});
