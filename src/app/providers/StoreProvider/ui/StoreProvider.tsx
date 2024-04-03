import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'shared/types/stateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

type TStoreProvider = {
  children?: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = (props: TStoreProvider) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(initialState, asyncReducers);

  return (<Provider store={store}>{children}</Provider>);
};
