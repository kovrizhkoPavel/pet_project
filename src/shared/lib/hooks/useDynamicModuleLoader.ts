import { useStore } from 'react-redux';
import { TReducers, TReducerWithManager, TStateSchemeKeys } from 'shared/types/stateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';

export const useDynamicModuleLoader = (reducers: TReducers, remountAfterUnmount?: boolean) => {
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
