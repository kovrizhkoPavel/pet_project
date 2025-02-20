import { useCallback, useEffect } from 'react';
import { useAnimationLibs } from '@/shared/lib/Providers/AnimationProvider';
import { useAnimationCloseHandler } from '@/shared/lib/hooks/useAnimationCloseHandler';

type TProps = {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const useAnimation = (props: TProps) => {
  const height = window.innerHeight;
  const { onClose, isOpen } = props;
  const {
    Gesture: { useDrag },
    Spring: { a, config, useSpring },
  } = useAnimationLibs();

  const [, close] = useAnimationCloseHandler(onClose);

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openHandler = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const closeHandler = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });
    close();
  };

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel,
    }) => {
      if (oy < -70) cancel();

      if (!last) openHandler();

      if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
        closeHandler(vy);
        return;
      }

      openHandler();
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  useEffect(() => {
    if (!isOpen) return;
    openHandler();
  }, [isOpen, openHandler]);

  return {
    a,
    y,
    closeHandler,
    bind,
    display,
  };
};
