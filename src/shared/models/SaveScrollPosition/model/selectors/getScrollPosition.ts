import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollPosition = createSelector(
  (state: StateScheme) => state.scrollPosition.scroll,
  (_, pathname: string) => pathname,
  (scroll, pathname) => scroll[pathname] || 0,
);