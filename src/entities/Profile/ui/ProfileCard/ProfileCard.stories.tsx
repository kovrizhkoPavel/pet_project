import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country, Currency } from 'shared/constants/common';
import avatar from 'shared/assets/tests/avatar.jpeg';
import { ProfileCard } from './ProfileCard';

const data = {
  firstname: 'Ivan',
  lastname: 'Ivanov',
  username: 'Ivan123',
  age: 20,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  avatar,
};

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [StoreDecorator()],
  args: { data },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Error: Story = {
  args: { error: 'error' },
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
