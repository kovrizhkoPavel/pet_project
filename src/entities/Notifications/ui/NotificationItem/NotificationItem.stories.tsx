import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { NotificationItem } from './NotificationItem';

const notification = {
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '1',
};

const meta = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  args: {
    notification,
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Href: Story = {
  args: {
    notification: {
      ...notification,
      href: 'storybook',
    },
  },
};
