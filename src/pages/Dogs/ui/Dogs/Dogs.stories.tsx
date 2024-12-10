import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { Dogs } from './Dogs';

const meta = {
  title: 'pages/Dogs',
  component: Dogs,
} satisfies Meta<typeof Dogs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DogsDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};