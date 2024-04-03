import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { AuthSchema } from 'features/AuthByUserName';
import {
  EnhancedStore,
  Reducer, ReducersMapObject, StateFromReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';

export type StateSchema = {
  counter?: CounterScheme;
  user?: UserScheme;
  authForm?: AuthSchema;
};

export type TStateSchemeKeys = keyof StateSchema;

type CombineReducer<T> = {
  [key in keyof T]: Reducer<T[key], UnknownAction, key extends keyof T ? T[key] : never>;
}

export type TReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateFromReducersMapObject<CombineReducer<StateSchema>>;
  add: (key: TStateSchemeKeys, reducer: Reducer) => void;
  remove: (key: TStateSchemeKeys) => void;
}

export type TReducerWithManager = EnhancedStore<StateSchema> & { reducerManager: TReducerManager };
