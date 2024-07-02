import { StateSchema, TReducers } from 'shared/types/stateSchema';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  initial?: StateSchema,
  asyncReducer?: TReducers,
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={initial}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer } as ReducersMapObject<StateSchema>}
  >
    <Story />
  </StoreProvider>
);
