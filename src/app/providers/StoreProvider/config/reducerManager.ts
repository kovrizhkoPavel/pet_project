import {
  combineReducers, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { StateSchema, TReducerManager, TStateSchemeKeys } from 'shared/types/stateSchema';

export const createReducerManager = (
  initialReducers: ReducersMapObject<StateSchema>,
): TReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: TStateSchemeKeys[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: UnknownAction) => {
      const updateState = { ...state };
      if (keysToRemove.length > 0) {
        keysToRemove.forEach((key) => {
          delete updateState[key];
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
