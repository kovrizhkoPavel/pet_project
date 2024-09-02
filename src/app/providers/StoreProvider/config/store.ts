import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme, TThunkExtra } from 'shared/types/stateScheme';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { scrollPositionReducer } from 'features/SaveScrollPosition';

export const createReduxStore = (
  initialState?: StateScheme,
  asyncReducers?: ReducersMapObject<StateScheme>,
) => {
  const reducer: ReducersMapObject<StateScheme> = {
    ...asyncReducers,
    user: userReducer,
    scrollPosition: scrollPositionReducer,
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

  return { ...store, reducerManager };
};
