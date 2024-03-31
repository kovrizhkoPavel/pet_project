import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { Text, TextVariant } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  args: {
    text: 'text',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextTitle: Story = {
  args: {
    title: 'Title',
  },
};
export const TextTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const TextError: Story = {
  args: {
    title: 'Title',
    variant: TextVariant.ERROR,
  },
};

export const OnlyText: Story = {};
export const OnlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
