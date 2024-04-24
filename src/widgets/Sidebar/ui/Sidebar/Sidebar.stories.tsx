import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { Sidebar } from 'widgets/Sidebar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
