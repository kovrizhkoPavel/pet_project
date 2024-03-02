import { ButtonHTMLAttributes, FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { TObjectValue } from 'shared/types/types';
import cls from './Button.module.scss';

export const ButtonTheme = {
  CLEAR: 'clear',
  BORDER: 'border',
} as const;

type TButtonProps = {
  className?: string;
  theme?: TObjectValue<typeof ButtonTheme>;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<TButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.CLEAR,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={getClassName(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
