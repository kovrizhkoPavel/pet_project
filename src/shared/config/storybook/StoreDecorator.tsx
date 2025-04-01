import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateScheme, TReducers } from '@/shared/types/stateScheme';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { authReducer } from '@/features/AuthByUserName';
import { articleDetailsPageMainReducer } from '@/pages/ArticleDetailsPage';
import { articlesPageMainReducer } from '@/pages/ArticlesPage';
import { profileFormReducer } from '@/features/ProfileForm';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
  profileForm: profileFormReducer,
  articleDetailsPage: articleDetailsPageMainReducer,
  articlesPage: articlesPageMainReducer,
};

export const StoreDecorator =
  (initial?: StateScheme, asyncReducer?: TReducers) => (Story: StoryFn) => (
    <StoreProvider
      initialState={initial}
      asyncReducers={
        {
          ...defaultAsyncReducers,
          ...asyncReducer,
        } as ReducersMapObject<StateScheme>
      }
    >
      <Story />
    </StoreProvider>
  );
