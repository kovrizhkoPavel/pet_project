import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Text.module.scss';
import { TObjectValue } from '../../types/types';

export const TextVariant = {
  ERROR: 'error',
  DEFAULT: 'default',
} as const;

type TTextProps = {
  className?: string;
  title?: string;
  text?: string;
  variant?: TObjectValue<typeof TextVariant>;
  align?: 'left' | 'center' | 'right';
}

export const Text: FC<TTextProps> = (props) => {
  const {
    className,
    title,
    text,
    variant = TextVariant.DEFAULT,
    align = 'left',
  } = props;

  const mod = {
    [cls[align]]: true,
  };

  return (
    <div className={
      getClassName(cls.textWrapper, mod, [className, cls[variant]])
    }
    >
      {title && <h4 className={cls.title}>{title}</h4>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
