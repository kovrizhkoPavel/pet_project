import { expect } from '@storybook/test';
import TestAsyncThunk from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticlesView } from '@/entities/Article/constants';
import { StateScheme } from '@/shared/types/stateScheme';
import { fetchGetArticleNextPage } from './fetchGetArticleNextPage';
import { fetchGetArticleList } from '../fetchGetArticleList/fetchGetArticleList';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

const articles = {
  pageNum: 2,
  error: '',
  entities: {},
  ids: [],
  limit: 5,
  isLoading: false,
  hasMore: true,
  view: ArticlesView.TILE,
  isInitialized: true,
} as ArticlesPageSchema;

const state = { articlesPage: { articles } } as StateScheme;

jest.mock('../fetchGetArticleList/fetchGetArticleList');

describe('fetchGetArticleNextPage', () => {
  test('fetch next page', async () => {
    const Thunk = new TestAsyncThunk(fetchGetArticleNextPage, state);

    await Thunk.callThunk();

    expect(Thunk.dispatch).toHaveBeenCalledTimes(4);
  });

  test('fetch no call', async () => {
    const Thunk = new TestAsyncThunk(fetchGetArticleNextPage, {
      articlesPage: {
        articles: { ...state?.articlesPage?.articles, hasMore: false },
      },
    } as StateScheme);

    await Thunk.callThunk();

    await expect(Thunk.dispatch).toHaveBeenCalledTimes(2);
    await expect(fetchGetArticleList).not.toHaveBeenCalled();
  });
});
