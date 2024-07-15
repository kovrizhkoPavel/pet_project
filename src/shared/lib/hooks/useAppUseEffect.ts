import { DependencyList, EffectCallback, useEffect } from 'react';

export const useAppUseEffect = (cb: EffectCallback, deps?: DependencyList) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
