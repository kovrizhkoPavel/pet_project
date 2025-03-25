import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme, TThunkExtra } from '@/shared/types/stateScheme';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { scrollPositionReducer } from '@/shared/models/SaveScrollPosition';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';

export const createReduxStore = (
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>,
) => {
  const reducer: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    user: userReducer,
    scrollPosition: scrollPositionReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(reducer);

  const extraArgument: TThunkExtra = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }).concat(rtkApi.middleware),
  });

  return { ...store, reducerManager };
};
