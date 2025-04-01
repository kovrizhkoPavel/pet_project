import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/constants';
import { UserRole } from '@/entities/User';
import { CommentItem } from './CommentItem';
import { TComment } from '../../model/types/comment';

const comment: TComment = {
  id: '1',
  text: 'storybook',
  user: {
    id: '11',
    username: 'user1',
    roles: [UserRole.USER],
  },
};

const meta = {
  title: 'entities/CommentItem',
  component: CommentItem,
  args: {
    comment,
  },
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
