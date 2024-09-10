export const throttle = (cb: (...args: any[]) => any, delay: number) => {
  let shouldCall = true;

  return (...args: any[]) => {
    if (shouldCall) {
      shouldCall = false;
      cb(...args);
      setTimeout(() => {
        shouldCall = true;
      }, delay());
    }
  };
};
