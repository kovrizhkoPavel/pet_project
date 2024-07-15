import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./ArticleDetailsPage')), 15e2);
}));
