import { useCallback, useEffect, useState } from 'react';
import { KeyboardKey } from '@/shared/constants/common';
import { useAnimationCloseHandler } from './useAnimationCloseHandler';

type TUseModalProps = {
  onClose: VoidFunction;
  isOpen: boolean
}

export const useModal = (props: TUseModalProps) => {
  const { onClose, isOpen } = props;
  const [isClosing, closeHandler] = useAnimationCloseHandler(onClose);
  const [isMounted, setIsMounted] = useState(false);

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

  return {
    isClosing,
    isMounted,
    closeHandler,
  };
};
