import { useCallback, useEffect, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { KeyboardKey } from 'shared/constants/common';
import Portal from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { TWithChildren } from 'shared/types/utils';
import cls from './Modal.module.scss';

type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  contentClass?: string;
  title?: string;
  lazy?: boolean;
} & TWithChildren;

const ANIMATION_DELAY = 300;

export const Modal = (props: TModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    className, contentClass, title, children, isOpen, lazy, onClose,
  } = props;

  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = useCallback(() => {
    if (!onClose) return;

    setIsClosing(true);

    const startTime = performance.now(); // Время начала анимации

    function animationLoop() {
      const currentTime = performance.now();

      // Проверяем, прошло ли достаточно времени для завершения анимации
      if (currentTime - startTime >= ANIMATION_DELAY) {
        onClose();
        setIsClosing(false);
      } else {
        // Продолжаем анимационный цикл
        requestAnimationFrame(animationLoop);
      }
    }

    // Начинаем анимационный цикл
    requestAnimationFrame(animationLoop);
  }, [onClose]);

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ESCAPE) {
      closeHandler();
    }
  }, [closeHandler]);

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
