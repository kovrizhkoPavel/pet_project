import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { TComment } from 'entities/Comment';
import { CommentList } from './CommentList';

const comment: TComment = {
  id: '1',
  text: 'storybook',
  user: {
    id: 11,
    userName: 'user1',
  },
};

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  args: {
    comments: new Array(3).fill(comment),
  },
} satisfies Meta<typeof CommentList>;

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
