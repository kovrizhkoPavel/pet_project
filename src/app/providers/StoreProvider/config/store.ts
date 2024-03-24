import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from 'shared/types/stateSchema';
import { userReducer } from 'entities/User';

export const createReduxStore = (initialState: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
