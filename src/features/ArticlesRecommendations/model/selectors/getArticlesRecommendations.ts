import { StateScheme } from 'shared/types/stateScheme';
import { createSelector } from '@reduxjs/toolkit';

const getArticlesRecommendations = (state: StateScheme) => state.articleDetailsPage?.recommendations;

export const getArticles = createSelector(
  getArticlesRecommendations,
  (state) => state?.articles || [],
);

export const getIsLoading = createSelector(
  getArticlesRecommendations,
  (state) => state?.isLoading,
);
