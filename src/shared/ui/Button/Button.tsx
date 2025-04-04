import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { TObjectValue } from '@/shared/types/utils';
import cls from './Button.module.scss';

export const ButtonVariant = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
  FILL: 'fill',
} as const;

type TButtonProps = {
  className?: string;
  variant?: TObjectValue<typeof ButtonVariant>;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = (props) => {
  const {
    className,
    variant = ButtonVariant.CLEAR,
    children,
    ...otherProps
  } = props;

  const mod = {
    [cls.no_hover_active]: variant === ButtonVariant.CLEAR,
  };

  return (
    <button
      type="button"
      className={getClassName(cls.button, mod, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
