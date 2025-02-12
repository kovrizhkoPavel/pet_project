import { getClassName } from 'shared/lib/classNames/getClassName';
import { TStyleMod, TWithChildren } from 'shared/types/utils';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import cls from './Drawer.module.scss';

type TDrawerProps = {
  className?: string;
  isOpen?: boolean;
  onClose?: VoidFunction;
} & TWithChildren

export const Drawer = (props: TDrawerProps) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const { theme } = useTheme();

  const mods: TStyleMod = {
    [cls.opened]: !!isOpen,
  };

  return (
    <div className={getClassName(cls.drawer, mods, [className, theme])}>
      <Overlay onclick={onClose} />
      <div className={cls.content}>
        {children}
      </div>
    </div>
  );
};
