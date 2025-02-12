import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Overlay.module.scss';

type TOverlayProps = {
  className?: string;
  onclick?: VoidFunction;
}

export const Overlay = ({ className, onclick }: TOverlayProps) => (
  <div
    className={getClassName(cls.overlay, {}, [className])}
    onClick={onclick}
  />
);
