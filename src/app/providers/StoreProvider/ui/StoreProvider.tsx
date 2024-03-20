import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'shared/types/stateSchema';
import { createReduxStore } from '../config/store';

type TStoreProvider = {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = (props: TStoreProvider) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState);

  return (<Provider store={store}>{children}</Provider>);
};
