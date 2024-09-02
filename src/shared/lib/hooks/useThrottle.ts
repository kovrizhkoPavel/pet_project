import { useCallback, useRef } from 'react';

export const useThrottle = (cb: (...args: unknown[]) => unknown, delay: number) => {
  const canCall = useRef(true);

  return useCallback((...args: unknown[]) => {
    if (canCall.current) {
      cb(args);
      canCall.current = false;

      setTimeout(() => {
        canCall.current = false;
      }, delay);
    }
  }, [cb, delay]);
};
