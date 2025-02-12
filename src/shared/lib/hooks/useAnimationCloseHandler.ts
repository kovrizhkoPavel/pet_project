import { useCallback, useState } from 'react';
import { ANIMATION_DURATION } from 'shared/constants/assets';

export const useAnimationCloseHandler = (onClose: VoidFunction): [boolean, VoidFunction] => {
  const [isClosing, setIsClosing] = useState(false);

  const closeHandler = useCallback(() => {
    setIsClosing(true);

    const startTime = performance.now();

    function animationLoop() {
      const currentTime = performance.now();

      if (currentTime - startTime >= ANIMATION_DURATION) {
        onClose();
        setIsClosing(false);
      } else {
        requestAnimationFrame(animationLoop);
      }
    }

    requestAnimationFrame(animationLoop);
  }, [onClose]);

  return [isClosing, closeHandler];
};
