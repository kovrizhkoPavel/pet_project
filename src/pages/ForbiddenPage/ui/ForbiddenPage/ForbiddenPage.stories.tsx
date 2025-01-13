import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { ForbiddenPage } from './ForbiddenPage';

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForbiddenPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};