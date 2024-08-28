import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { StateScheme } from 'shared/types/stateScheme';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({
    profile: {
      form: {
        username: 'user',
        firstname: 'name',
        lastname: 'lastname',
        age: 22,
      },
    },
  } as StateScheme)],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
