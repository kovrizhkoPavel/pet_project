/* eslint-disable react/jsx-props-no-spreading */
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { TStyleMod, TWithChildren } from '@/shared/types/utils';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/Providers/AnimationProvider';
import { useAnimation } from '@/shared/lib/hooks/useSpringAnimation';
import cls from './Drawer.module.scss';

type TDrawerProps = {
  className?: string;
  lazy?: boolean;
  isOpen: boolean;
  onClose: VoidFunction;
} & TWithChildren;

const height = window.innerHeight;

const DrawerContent = (props: TDrawerProps) => {
  const { className, children, isOpen, onClose } = props;

  const { closeHandler, display, a, y, bind } = useAnimation({
    isOpen,
    onClose,
  });

  const { theme } = useTheme();

  const mods: TStyleMod = {
    [cls.opened]: isOpen,
  };

  return (
    <div className={getClassName(cls.drawer, mods, [className, theme])}>
      <Overlay
        onclick={() => {
          closeHandler();
        }}
      />
      <a.div
        className={cls.content}
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height}px)`, y }}
      >
        {children}
      </a.div>
    </div>
  );
};

const DrawerAsync = (props: TDrawerProps) => {
  const { isLoaded } = useAnimationLibs();
  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
};

export const Drawer = (props: TDrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
