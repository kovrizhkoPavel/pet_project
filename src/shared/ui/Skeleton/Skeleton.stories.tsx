import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const LightRadius: Story = {
  args: { border: '50%', width: 200, height: 200 },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
