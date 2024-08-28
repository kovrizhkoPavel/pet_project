import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';
import { TArticle } from 'entities/Article/model/types/article';
import { getLimit, getPageNum } from '../../selectors/getArticles';

export const fetchGetArticleList = createAsyncThunk<
  TArticle[],
  void,
  TThunkApiConfig<string>
>(
  'ArticlePage/fetchGetArticleList',
  async (_, thinkAPI) => {
    const { extra, rejectWithValue, getState } = thinkAPI;

    const limit = getLimit(getState());
    const pageNum = getPageNum(getState());

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
