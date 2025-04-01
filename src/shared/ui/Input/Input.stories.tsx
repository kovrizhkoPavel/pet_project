import { Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  args: {
    value: 'Test',
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: 'test',
    hint: 'hint',
  },
};

export const Error: Story = {
  args: {
    label: 'test',
    hint: 'hint',
    isError: true,
  },
};

export const NoLabel: Story = {};

export const LabelDark: Story = {
  args: {
    label: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NoLabelDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export default meta;
