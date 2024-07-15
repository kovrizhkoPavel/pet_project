import { useEffect } from 'react';

export const useAppUseEffect = (cb: VoidFunction, deps?: unknown[]) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }
  }, deps);
};
