/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Popover } from './Popover';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  args: {
    trigger: <Button variant={ButtonVariant.FILL}>trigger</Button>,
    children: <div>content</div>,
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClearLight: Story = {};
