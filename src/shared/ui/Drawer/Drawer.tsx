/* eslint-disable react/jsx-props-no-spreading */
import { getClassName } from 'shared/lib/classNames/getClassName';
import { TStyleMod, TWithChildren } from 'shared/types/utils';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';
import { a, config, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { useCallback, useEffect } from 'react';
import { useAnimationLibs } from 'shared/lib/Providers/AnimationProvider';
import cls from './Drawer.module.scss';

type TDrawerProps = {
  className?: string;
  lazy?: boolean;
  isOpen: boolean;
  onClose: VoidFunction;
} & TWithChildren

const height = window.innerHeight;

const DrawerContent = (props: TDrawerProps) => {
  const {
    className, children, isOpen, lazy, onClose,
  } = props;

  const { isMounted, isClosing, closeHandler } = useModal({ isOpen, onClose });

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });
    closeHandler();
  };

  useEffect(() => {
    if (!isOpen) return;
    openDrawer();
  }, [isOpen, openDrawer]);

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      offset: [, oy],
      cancel,
    }) => {
      if (oy < -70) cancel();

      if (!last) openDrawer();

      if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
        close(vy);
        return;
      }

      openDrawer();
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  const { theme } = useTheme();

  if (lazy && !isMounted) return null;

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const mods: TStyleMod = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  return (
    <div className={getClassName(cls.drawer, mods, [className, theme])}>
      <Overlay onclick={() => {
        close();
      }}
      />
      <a.div className={cls.content} {...bind()} style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}>
        {children}
      </a.div>
    </div>
  );
};

export const Drawer = (props: TDrawerProps) => {
  const { isLoaded } = useAnimationLibs();
  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
};
