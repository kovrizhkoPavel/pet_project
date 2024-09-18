import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';

const getArticleDetailsPageState = (state: StateScheme) => state.articleDetailsPage?.articlePage;

export const getIsInit = createSelector(
  getArticleDetailsPageState,
  (state) => !!state?._isInit,
);
