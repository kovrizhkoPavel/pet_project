export const debounce = (cb: (...args: any[]) => any, delay: number) => {
  let timeoutId: null | number = null;

  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(cb, delay, ...args);
  };
};
