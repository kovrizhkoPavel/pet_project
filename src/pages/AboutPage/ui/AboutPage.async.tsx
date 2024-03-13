import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./AboutPage')), 15e2);
}));
