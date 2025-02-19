import { Meta, type StoryObj } from '@storybook/react';
import HomeIcon from '@/shared/assets/icon/home-icon.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { ButtonIcon } from './ButtonIcon';

const meta = {
  title: 'shared/ButtonIcon',
  component: ButtonIcon,
  args: {
    onClick: () => '',
    Icon: HomeIcon,
  },
} satisfies Meta<typeof ButtonIcon>;

type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: 'test',
  },
};

export const noLabel: Story = {};

export const LabelDark: Story = {
  args: {
    label: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const noLabelDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export default meta;
