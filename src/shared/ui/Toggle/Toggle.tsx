import { ButtonHTMLAttributes, FC, ReactNode, useState } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import cls from './Toggle.module.scss';

type TToggleProps = {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
  onChangeHandler?: (isActive: boolean) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Toggle: FC<TToggleProps> = (props) => {
  const { className, children, isActive, onChangeHandler } = props;
  const [active, setActive] = useState(isActive ?? false);

  const onButtonClick = () => {
    setActive(!active);
    onChangeHandler?.(!active);
  };

  return (
    <button
      type="button"
      onClick={onButtonClick}
      className={getClassName(
        cls.toggle,
        { [cls.active]: isActive ?? active },
        [className],
      )}
    >
      {children}
    </button>
  );
};
