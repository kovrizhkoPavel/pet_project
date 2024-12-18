import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { EditProfileForm } from './EditProfileForm';

const meta = {
  title: 'features/EditProfileForm',
  component: EditProfileForm,
} satisfies Meta<typeof EditProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditProfileFormDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};