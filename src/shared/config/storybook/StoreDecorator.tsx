import { StateSchema } from 'shared/types/stateSchema';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authReducer } from 'features/AuthByUserName';
import { TReducers } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: TReducers = {
  authForm: authReducer,
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
