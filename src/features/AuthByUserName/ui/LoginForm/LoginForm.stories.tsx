import { Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { StateSchema } from 'shared/types/stateSchema';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Auth: Story = {
  decorators: [StoreDecorator({
    authForm: {
      userName: 'admin',
      password: '123',
    },
  } as StateSchema)],
};

export const Error: Story = {
  decorators: [StoreDecorator({
    authForm: {
      userName: 'admin',
      password: '123',
      error: 'Error',
    },
  } as StateSchema)],
};

export const Loading: Story = {
  decorators: [StoreDecorator({
    authForm: {
      userName: 'admin',
      password: '123',
      isLoading: true,
    },
  } as StateSchema)],
};
export default meta;
