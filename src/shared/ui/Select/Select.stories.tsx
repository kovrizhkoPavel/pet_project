import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    options: [{ label: 'story', value: 'story' }, { label: 'book', value: 'book' }],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    label: 'storybook',
  },
};

export const LightColumns: Story = {
  args: {
    label: 'storybook',
    direction: 'column',
  },
};

export const ClearDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
