import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from 'shared/types/stateSchema';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/AuthByUserName';

export const createReduxStore = (initialState: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    authForm: authReducer,
  },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
