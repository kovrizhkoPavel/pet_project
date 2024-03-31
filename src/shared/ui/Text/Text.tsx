import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Text.module.scss';
import { TObjectValue } from '../../types/types';

export const TextVariant = {
  ERROR: 'error',
} as const;

type TTextProps = {
  className?: string;
  title?: string;
  text?: string;
  variant?: TObjectValue<typeof TextVariant>;
}

export const Text: FC<TTextProps> = (props) => {
  const {
    className, title, text, variant,
  } = props;

  return (
    <div className={getClassName(cls.textWrapper, {}, [className, cls[variant]])}>
      {title && <h4 className={cls.title}>{title}</h4>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
