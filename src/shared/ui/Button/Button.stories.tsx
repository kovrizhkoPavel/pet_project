import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { Button, ButtonVariant } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
  args: {
    children: 'Text',
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineLight: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: ButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
