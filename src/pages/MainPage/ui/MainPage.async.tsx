import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./MainPage')), 15e2);
}));
