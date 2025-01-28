import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { NotificationButton } from './NotificationButton';

const meta = {
  title: 'features/NotificationButton',
  component: NotificationButton,
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationButtonLight: Story = {};

export const NotificationButtonDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
