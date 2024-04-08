import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
