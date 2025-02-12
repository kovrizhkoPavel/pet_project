import { getClassName } from 'shared/lib/classNames/getClassName';
import { TStyleMod, TWithChildren } from 'shared/types/utils';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal';
import cls from './Drawer.module.scss';

type TDrawerProps = {
  className?: string;
  lazy?: boolean;
  isOpen: boolean;
  onClose: VoidFunction;
} & TWithChildren

export const Drawer = (props: TDrawerProps) => {
  const {
    className, children, isOpen, lazy, onClose,
  } = props;

  const { theme } = useTheme();
  const { isMounted, isClosing, closeHandler } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) return null;

  const mods: TStyleMod = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  return (
    <div className={getClassName(cls.drawer, mods, [className, theme])}>
      <Overlay onclick={closeHandler} />
      <div className={cls.content}>
        {children}
      </div>
    </div>
  );
};
