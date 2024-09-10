import {
  ButtonHTMLAttributes, FC, ReactNode, useState,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Toggle.module.scss';

type TToggleProps = {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
  onChange?: VoidFunction;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Toggle: FC<TToggleProps> = (props) => {
  const {
    className, children, isActive = false, onChange,
  } = props;
  const [active, setActive] = useState(isActive);

  const onButtonClick = () => {
    setActive(!active);
    onChange?.();
  };

  return (
    <button
      type="button"
      onClick={onButtonClick}
      className={getClassName(
        cls.toggle,
        { [cls.active]: active },
        [className],
      )}
    >
      {children}
    </button>
  );
};
