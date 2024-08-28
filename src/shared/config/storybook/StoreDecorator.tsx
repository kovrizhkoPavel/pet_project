import { StateScheme, TReducers } from 'shared/types/stateScheme';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'pages/ProfilePage/model/slice/profileSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleCommentsReducer } from 'features/ArticleComments/model/slice/artileCommentSlice';
import { articlePageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
  articleDetails: articleDetailsReducer,
  articleComments: articleCommentsReducer,
  profile: profileReducer,
  addCommentForm: addCommentFormReducer,
  articles: articlePageReducer,
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
