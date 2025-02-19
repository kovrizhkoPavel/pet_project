import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
