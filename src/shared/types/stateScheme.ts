import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserScheme } from '@/entities/User';
import { AuthSchema } from '@/features/AuthByUserName';
import { ArticlesMainScheme } from '@/pages/ArticlesPage';
import { ScrollPositionSchema } from '@/shared/models/SaveScrollPosition';
import { ArticleDetailsPageScheme } from '@/pages/ArticleDetailsPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileFormScheme } from '@/features/ProfileForm';

export type StateScheme = {
  user: UserScheme;
  scrollPosition: ScrollPositionSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  authForm?: AuthSchema;
  profileForm?: ProfileFormScheme;
  articleDetailsPage?: ArticleDetailsPageScheme;
  articlesPage?: ArticlesMainScheme;
};

export type TStateSchemeKeys = keyof StateScheme;

export type TReducerManager = {
  getReducerMap: () => ReducersMapObject<StateScheme>;
  reduce: Reducer<StateScheme>;
  add: (key: TStateSchemeKeys, reducer: Reducer) => void;
  remove: (key: TStateSchemeKeys) => void;
};

export type TReducerWithManager = EnhancedStore<StateScheme> & {
  reducerManager: TReducerManager;
};

export type TThunkExtra = {
  api: AxiosInstance;
};

export type TThunkApiConfig<T> = {
  rejectValue: T;
  extra: TThunkExtra;
  state: StateScheme;
};

export type TReducers = {
  [key in TStateSchemeKeys]?: Reducer;
};
