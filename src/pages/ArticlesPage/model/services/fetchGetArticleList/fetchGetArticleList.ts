import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';
import { TArticle } from 'entities/Article/model/types/article';
import { getLimit } from '../../selectors/getArticles';

type TFetchGetArticlesParams = {
  pageNum: number;
};

export const fetchGetArticleList = createAsyncThunk<
  TArticle[],
  TFetchGetArticlesParams,
  TThunkApiConfig<string>
>(
  'ArticlePage/fetchGetArticleList',
  async ({ pageNum }, thinkAPI) => {
    const { extra, rejectWithValue, getState } = thinkAPI;

    const limit = getLimit(getState());

    try {
      const response = await extra.api.get<TArticle[]>(ArticleUrl.ARTICLE, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: pageNum,
        },
      });

      return response?.data ? response.data : rejectWithValue('error');
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
