import { StateSchema } from 'shared/types/stateSchema';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  authForm: authReducer,
};

export const StoreDecorator = (
  initial?: StateSchema,
  asyncReducer?: ReducersMapObject<StateSchema>,
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={initial}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducer }}
  >
    <Story />
  </StoreProvider>
);
