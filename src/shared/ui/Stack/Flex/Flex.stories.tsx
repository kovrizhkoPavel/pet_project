import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,
  args: {
    direction: 'row',
    children: <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
              </>,
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {};
