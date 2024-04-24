import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema, TThunkExtra } from 'shared/types/stateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => {
  const reducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(reducer);

  const extraArgument: TThunkExtra = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
