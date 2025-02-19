import {
  combineReducers, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { StateScheme, TReducerManager, TStateSchemeKeys } from '@/shared/types/stateScheme';
import { TOptionalLiteralKeys } from '@/shared/types/utils';

type TState = Omit<StateScheme, TOptionalLiteralKeys<StateScheme>>;

export const createReducerManager = (
  initialReducers: ReducersMapObject<StateScheme>,
): TReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: TStateSchemeKeys[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: TState | undefined, action: UnknownAction) => {
      const updateState = { ...state };
      if (keysToRemove.length > 0 && state) {
        keysToRemove.forEach((key) => {
          delete updateState[key as keyof typeof updateState];
        });
        keysToRemove = [];
      }

      return combinedReducer(updateState, action);
    },

    add: (key: TStateSchemeKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: TStateSchemeKeys) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
