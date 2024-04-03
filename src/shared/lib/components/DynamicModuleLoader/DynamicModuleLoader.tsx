import { FC, ReactNode, useEffect } from 'react';
import { TReducerWithManager, TStateSchemeKeys } from 'shared/types/stateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

export type TReducers = {
  [key in TStateSchemeKeys]?: Reducer;
}

type TDynamicModuleLoaderProps = {
  reducers: TReducers;
  children: ReactNode;
  remountAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<TDynamicModuleLoaderProps> = (props) => {
  const {
    reducers, children, remountAfterUnmount,
  } = props;

  const store = useStore() as TReducerWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: [TStateSchemeKeys, Reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (remountAfterUnmount) {
        Object.keys(reducers).forEach((name: TStateSchemeKeys) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@INIT ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, remountAfterUnmount, store.reducerManager]);

  return (
    <>{children}</>
  );
};
