import { StateScheme, TReducers } from 'shared/types/stateScheme';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';
import { profileReducer } from 'pages/ProfilePage/model/slice/profileSlice';
import { articleDetailsPageMainReducer } from 'pages/ArticleDetailsPage';
import { articlesPageMainReducer } from 'pages/ArticlesPage';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
  profile: profileReducer,
  articleDetailsPage: articleDetailsPageMainReducer,
  articlesPage: articlesPageMainReducer,
};

export const StoreDecorator = (
  initial?: StateScheme,
  asyncReducer?: TReducers,
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={initial}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer } as ReducersMapObject<StateScheme>}
  >
    <Story />
  </StoreProvider>
);
