import {
  FC, ReactNode, MouseEvent, useCallback, useEffect,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import Portal from 'shared/ui/Portal/Portal';
import { KeyboardKey } from 'shared/constants';
import cls from './Modal.module.scss';

type TModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
}

export const Modal: FC<TModalProps> = (props) => {
  const {
    className, title, children, isOpen, onClose,
  } = props;

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ESCAPE) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (evt: MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <Portal>
      <div className={
        getClassName(cls.modal, { [cls.opened]: isOpen }, [className])
      }
      >
        <div className={cls.overlay} onClick={onClose}>
          <div className={cls.content} onClick={onContentClick}>
            {title && <h4>{title}</h4>}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
