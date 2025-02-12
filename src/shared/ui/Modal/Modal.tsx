import {
  FC, ReactNode, useCallback, useEffect, useState,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { KeyboardKey } from 'shared/constants/common';
import Portal from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import cls from './Modal.module.scss';

type TModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  contentClass?: string;
  title?: string;
  lazy?: boolean;
}

export const Modal: FC<TModalProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    className, contentClass, title, children, isOpen, lazy, onClose,
  } = props;

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ESCAPE) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  if (!isMounted && lazy) return null;

  return (
    <Portal>
      <div className={
        getClassName(cls.modal, { [cls.opened]: isOpen }, [className])
      }
      >
        <Overlay onclick={onClose} />
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
