import { useCallback, useRef } from 'react';

export const useThrottle = (cb: (...args: any[]) => any, delay: number) => {
  const canCall = useRef(true);

  return useCallback(
    (...args: any[]) => {
      if (canCall.current) {
        cb(...args);
        canCall.current = false;

        setTimeout(() => {
          canCall.current = true;
        }, delay);
      }
    },
    [cb, delay],
  );
};
