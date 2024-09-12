import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';
import { TArticle } from 'entities/Article/model/types/article';
import { getArticlesSearchValue } from 'features/ArticlesSearch';
import { getArticlesSortField, getArticlesSortOrder } from 'features/ArticlesSort';
import { getArticlesFilterTypes } from 'features/ArticlesFilter';
import { getLimit, getPageNum } from '../../selectors/getArticles';

type TFetchGetArticleListArg = {
  replace?: boolean
}

export const fetchGetArticleList = createAsyncThunk<
  TArticle[],
  TFetchGetArticleListArg | void,
  TThunkApiConfig<string>
>(
  'ArticlePage/fetchGetArticleList',
  async (_, thinkAPI) => {
    const { extra, rejectWithValue, getState } = thinkAPI;

    const limit = getLimit(getState());
    const pageNum = getPageNum(getState());
    const search = getArticlesSearchValue(getState());
    const sortField = getArticlesSortField(getState());
    const sortOrder = getArticlesSortOrder(getState());
    const filterType = getArticlesFilterTypes(getState());

    try {
      const response = await extra.api.get<TArticle[]>(ArticleUrl.ARTICLE, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: pageNum,
          _sort: sortField,
          _order: sortOrder,
          q: search,
          type: filterType,
        },
      });

      return response?.data ? response.data : rejectWithValue('error');
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
