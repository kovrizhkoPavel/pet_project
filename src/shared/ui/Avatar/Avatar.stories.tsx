import { Meta, type StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '../../assets/tests/avatar.jpeg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export const UserAvatar: Story = {
  args: {
    src: AvatarImg,
  },
};

export default meta;
