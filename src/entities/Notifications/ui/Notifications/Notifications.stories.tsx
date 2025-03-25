/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Notifications } from './Notifications';

const notifications = [
  {
    id: '1',
    title: 'Уведомление 1',
    description: 'Произошло какое-то событие',
    userId: '1',
  },
  {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    userId: '1',
    href: 'http://localhost:3000/admin',
  },
];

const meta = {
  title: 'entities/Notifications',
  component: Notifications,
  args: {
    notifications,
    children: <Button variant={ButtonVariant.FILL}>trigger</Button>,
  },
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationLight: Story = {};

export const NotificationDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
