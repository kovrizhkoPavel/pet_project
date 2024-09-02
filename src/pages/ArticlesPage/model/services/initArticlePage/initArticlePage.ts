import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { fetchGetArticleList } from 'pages/ArticlesPage/model/services/fetchGetArticleList/fetchGetArticleList';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { getIsInitialized } from '../../selectors/getArticles';

export const initArticlePage = createAsyncThunk<
  void,
  void,
  TThunkApiConfig<string>
>(
  '/initArticlePage',
  async (_, thinkAPI) => {
    const { dispatch, getState } = thinkAPI;

    const isInitialized = getIsInitialized(getState());

    if (isInitialized) return;

    dispatch(articlePageActions.initViewState());
    dispatch(fetchGetArticleList());
  },
);
