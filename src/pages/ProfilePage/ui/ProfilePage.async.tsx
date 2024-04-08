import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./ProfilePage')), 15e2);
}));
