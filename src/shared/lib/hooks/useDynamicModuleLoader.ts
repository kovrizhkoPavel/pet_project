import { useStore } from 'react-redux';
import { TReducers, TReducerWithManager, TStateSchemeKeys } from 'shared/types/stateScheme';
import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';

export const useDynamicModuleLoader = (reducers: TReducers, remountAfterUnmount = true) => {
  const store = useStore() as TReducerWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as TStateSchemeKeys, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (remountAfterUnmount) {
        Object.keys(reducers).forEach((name) => {
          store.reducerManager.remove(name as TStateSchemeKeys);
          dispatch({ type: `@INIT ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, remountAfterUnmount, store.reducerManager]);
};
