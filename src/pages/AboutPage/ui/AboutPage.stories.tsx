import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import AboutPage from './AboutPage';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
