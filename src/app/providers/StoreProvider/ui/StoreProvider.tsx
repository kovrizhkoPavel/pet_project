import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'shared/types/stateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';

type TStoreProvider = {
  initialState?: StateSchema;
  children?: ReactNode;
  asyncReducers?: ReducersMapObject<StateSchema>
}

export const StoreProvider = (props: TStoreProvider) => {
  const { children, initialState, asyncReducers } = props;
  const navigate = useNavigate();
  const store = createReduxStore(
    initialState,
    asyncReducers,
    navigate,
  );

  return (<Provider store={store}>{children}</Provider>);
};
