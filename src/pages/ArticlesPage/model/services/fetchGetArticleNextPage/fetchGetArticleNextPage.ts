import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { fetchGetArticleList } from 'pages/ArticlesPage/model/services/fetchGetArticleList/fetchGetArticleList';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { getHasMore, getIsLoading, getPageNum } from '../../selectors/getArticles';

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

    if (isLoading || !hasMore) return;

    dispatch(articlePageActions.setPageNum(pageNum));
    dispatch(fetchGetArticleList());
  },
);
