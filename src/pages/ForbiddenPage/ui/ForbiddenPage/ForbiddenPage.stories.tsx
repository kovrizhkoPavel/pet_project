import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ForbiddenPage } from './ForbiddenPage';

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
