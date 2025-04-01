import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { Country, Currency } from '@/shared/constants/common';
import { EditProfileForm } from './EditProfileForm';

const meta = {
  title: 'features/EditProfileForm',
  component: EditProfileForm,
  args: {
    initialData: {
      username: 'username',
      firstname: 'firstname',
      lastname: 'lastname',
      age: 1,
      city: 'city',
      country: Country.Russia,
      currency: Currency.RUB,
    },
    isError: false,
    isLoading: false,
  },
} satisfies Meta<typeof EditProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditProfileFormDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
