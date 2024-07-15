import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateScheme } from 'shared/types/stateScheme';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';

type TStoreProvider = {
  initialState?: StateScheme;
  children?: ReactNode;
  asyncReducers?: ReducersMapObject<StateScheme>
}

export const StoreProvider = (props: TStoreProvider) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(
    initialState,
    asyncReducers,
  );

  return (<Provider store={store}>{children}</Provider>);
};
