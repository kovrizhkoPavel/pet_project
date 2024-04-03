import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from 'shared/types/stateSchema';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/AuthByUserName';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';

export const createReduxStore = (initialState: StateSchema) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(reducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
