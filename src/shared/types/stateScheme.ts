import { UserScheme } from 'entities/User';
import { AuthSchema } from 'features/AuthByUserName';
import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsScheme } from 'entities/Article';
import { ArticleCommentsScheme } from 'features/ArticleComments';
import { AddCommentFormScheme } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollPositionSchema } from 'features/SaveScrollPosition/model/types/ScrollPositionSchema';
import { ArticlesSortScheme } from 'features/ArticlesSort/model/types/ArticlesSortScheme';

export type StateScheme = {
  user: UserScheme;
  scrollPosition: ScrollPositionSchema;

  // async reducers
  authForm?: AuthSchema;
  profile?: ProfileScheme;
  articles?: ArticlesPageSchema;
  articleDetails?: ArticleDetailsScheme;
  articleComments?: ArticleCommentsScheme;
  addCommentForm?: AddCommentFormScheme;
  articlesSort?: ArticlesSortScheme;
};

export type TStateSchemeKeys = keyof StateScheme;

export type TReducerManager = {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: Reducer<StateScheme>;
  add: (key: TStateSchemeKeys, reducer: Reducer) => void;
  remove: (key: TStateSchemeKeys) => void;
}

export type TReducerWithManager = EnhancedStore<StateScheme> & { reducerManager: TReducerManager };

export type TThunkExtra = {
  api: AxiosInstance;
};

export type TThunkApiConfig<T> = {
  rejectValue: T;
  extra: TThunkExtra;
  state: StateScheme;
}

export type TReducers = {
  [key in TStateSchemeKeys]?: Reducer;
}
