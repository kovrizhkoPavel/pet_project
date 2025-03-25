/* eslint-disable */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  args: {
    content: <div>Story</div>,
    items: [
      {
        content: 'item1',
        href: 'http://localhost:6006/?path=/story/shared-dropdown--light',
      },
      { content: <div>item2</div>, onClick: () => alert('storybook') },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
