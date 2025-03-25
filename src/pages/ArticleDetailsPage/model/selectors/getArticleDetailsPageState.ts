import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/shared/types/stateScheme';

const getArticleDetailsPageState = (state: StateScheme) =>
  state.articleDetailsPage?.articlePage;

export const getIsInit = createSelector(
  getArticleDetailsPageState,
  (state) => !!state?._isInit,
);
