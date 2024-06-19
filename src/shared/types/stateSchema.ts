import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { AuthSchema } from 'features/AuthByUserName';
import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ProfileScheme } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';

export type StateSchema = {
  counter: CounterScheme;
  user: UserScheme;

  // async reducers
  authForm?: AuthSchema;
  profile?: ProfileScheme;
  articleDetails?: ArticleDetailsSchema;
};

export type TStateSchemeKeys = keyof StateSchema;

export type TReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<StateSchema>;
  add: (key: TStateSchemeKeys, reducer: Reducer) => void;
  remove: (key: TStateSchemeKeys) => void;
}

export type TReducerWithManager = EnhancedStore<StateSchema> & { reducerManager: TReducerManager };

export type TThunkExtra = {
  api: AxiosInstance;
};

export type TThunkApiConfig<T> = {
  rejectValue: T;
  extra: TThunkExtra;
  state: StateSchema;
}

export type TReducers = {
  [key in TStateSchemeKeys]?: Reducer;
}
