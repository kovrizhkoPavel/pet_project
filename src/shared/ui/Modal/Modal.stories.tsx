import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@/shared/ui/Modal/Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Text',
    title: 'Title',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {
  args: {
    isOpen: true,
  },
};
