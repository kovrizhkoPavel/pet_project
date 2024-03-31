import { StateSchema } from 'shared/types/stateSchema';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initial?: StateSchema) => (Story: StoryFn) => (
  <StoreProvider initialState={initial}>
    <Story />
  </StoreProvider>
);
