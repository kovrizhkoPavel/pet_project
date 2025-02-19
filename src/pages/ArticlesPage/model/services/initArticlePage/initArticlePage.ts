import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from '@/shared/types/stateScheme';
import { articlesFilterActions } from '@/features/ArticlesFilter';
import { articlesSearchActions } from '@/features/ArticlesSearch';
import { articlesSortActions } from '@/features/ArticlesSort';
import { getQuerySearchParams } from '../../../utils/utils';
import { fetchGetArticleList } from '../fetchGetArticleList/fetchGetArticleList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getIsInitialized } from '../../selectors/getArticles';

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  TThunkApiConfig<string>
>(
  '/initArticlePage',
  async (searchParams, thinkAPI) => {
    const { dispatch, getState } = thinkAPI;

    const isInitialized = getIsInitialized(getState());

    if (isInitialized) return;

    const params = getQuerySearchParams(searchParams);

    dispatch(articlesFilterActions.setFilterTypeBySearchParams(params));
    dispatch(articlesSearchActions.setSearchBySearchParams(params));
    dispatch(articlesSortActions.setSortBySearchParams(params));

    dispatch(articlesPageActions.initViewState());
    dispatch(fetchGetArticleList());
  },
);
