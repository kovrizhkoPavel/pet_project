import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./ArticlesPage')), 15e2);
}));
