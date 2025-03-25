import { ReactNode } from 'react';
import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { TWithChildren } from '@/shared/types/utils';
import cls from './Popover.module.scss';

type TPopoverProps = {
  trigger: ReactNode;
  placement?: AnchorProps;
} & TWithChildren;

export const Popover = (props: TPopoverProps) => {
  const { trigger, children, placement = 'bottom start' } = props;

  return (
    <HPopover className="relative">
      <PopoverButton>{trigger}</PopoverButton>
      <PopoverPanel anchor={placement} className={cls.popoverPanel}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
};
