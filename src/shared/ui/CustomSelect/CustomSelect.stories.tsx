import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { CustomSelect } from './CustomSelect';

const people = [
  { value: 1, label: 'Durward Reynolds' },
  { value: 2, label: 'Kenton Towne' },
  { value: 3, label: 'Therese Wunsch' },
  { value: 4, label: 'Benedict Kessler' },
  { value: 5, label: 'Katelyn Rohan' },
];

const meta = {
  title: 'shared/CustomSelect',
  component: CustomSelect,
  args: {
    options: people,
  },
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
  args: {
    readonly: true,
  },
};
