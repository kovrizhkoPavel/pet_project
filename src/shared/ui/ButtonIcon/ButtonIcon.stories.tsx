import { Meta, type StoryObj } from '@storybook/react';
import { ButtonIcon } from 'shared/ui/ButtonIcon/ButtonIcon';
import HomeIcon from 'shared/assets/icon/home-icon.svg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'shared/ButtonIcon',
  component: ButtonIcon,
  args: {
    onClick: () => '',
    Icon: HomeIcon,
  },
} satisfies Meta<typeof ButtonIcon>;

export const Label = {
  args: {
    label: 'test',
  },
};

export const noLabel = {};

export const LabelDark = {
  args: {
    label: 'test',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const noLabelDark = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export default meta;
