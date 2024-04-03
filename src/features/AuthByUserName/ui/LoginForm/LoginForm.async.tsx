import { lazy } from 'react';

export const LoginFormAsync = lazy(() => new Promise((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  setTimeout(() => res(import('./LoginForm')), 15e2);
}));
