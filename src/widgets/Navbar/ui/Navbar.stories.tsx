import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { StateSchema } from 'shared/types/stateSchema';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearLightAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: 1,
          userName: 'admin',
        },
      },
    } as StateSchema),
  ],
};
