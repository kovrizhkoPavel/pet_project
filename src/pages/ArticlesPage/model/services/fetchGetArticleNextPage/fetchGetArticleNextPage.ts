import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { fetchGetArticleList } from 'pages/ArticlesPage/model/services/fetchGetArticleList/fetchGetArticleList';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {
  getHasMore, getIsInitialized, getIsLoading, getPageNum,
} from '../../selectors/getArticles';

export const fetchGetArticleNextPage = createAsyncThunk<
  void,
  void,
  TThunkApiConfig<string>
>(
  '/fetchGetArticleNextPage',
  async (_, thinkAPI) => {
    const { dispatch, getState } = thinkAPI;

    const hasMore = getHasMore(getState());
    const isLoading = getIsLoading(getState());
    const pageNum = getPageNum(getState()) + 1;
    const isInitialized = getIsInitialized(getState());

    if (isLoading || !hasMore || !isInitialized) return;

    dispatch(articlesPageActions.setPageNum(pageNum));
    dispatch(fetchGetArticleList());
  },
);
