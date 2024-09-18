import { StateScheme, TReducers } from 'shared/types/stateScheme';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';
import { profileReducer } from 'pages/ProfilePage/model/slice/profileSlice';
import { articlePageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { articlesFilterReducer } from 'features/ArticlesFilter';
import { articlesSortReducer } from 'features/ArticlesSort';
import { articlesSearchReducer } from 'features/ArticlesSearch';
import { articleDetailsPageMainReducer } from 'pages/ArticleDetailsPage';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
  articleDetailsPage: articleDetailsPageMainReducer,
  profile: profileReducer,
  articles: articlePageReducer,
  articlesSort: articlesSortReducer,
  articlesSearch: articlesSearchReducer,
  articlesFilter: articlesFilterReducer,
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
