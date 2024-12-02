import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const StoryComponent = () => (
  <>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </>
);

const meta = {
  title: 'shared/Flex',
  component: Flex,
  args: {
    direction: 'row',
    children: <StoryComponent />,
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {};
