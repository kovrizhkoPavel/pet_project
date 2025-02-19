import { getClassName } from '@/shared/lib/classNames/getClassName';
import Portal from '@/shared/ui/Portal/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { TWithChildren } from '@/shared/types/utils';
import { useModal } from '@/shared/lib/hooks/useModal';
import cls from './Modal.module.scss';

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  contentClass?: string;
  title?: string;
  lazy?: boolean;
} & TWithChildren;

export const Modal = (props: TModalProps) => {
  const {
    className, contentClass, title, children, isOpen, lazy, onClose,
  } = props;

  const { isMounted, isClosing, closeHandler } = useModal({
    isOpen,
    onClose,
  });

  if (!isMounted && lazy) return null;

  const mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={
        getClassName(cls.modal, mods, [className])
      }
      >
        <Overlay onclick={closeHandler} />
        <div className={cls.content}>
          {title && <h4>{title}</h4>}
          <div className={getClassName('', {}, [contentClass])}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
