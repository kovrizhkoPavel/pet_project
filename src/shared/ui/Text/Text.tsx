import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Text.module.scss';
import { TObjectValue } from '../../types/utils';

export const TextVariant = {
  ERROR: 'error',
  DEFAULT: 'default',
} as const;

const TextSize = {
  M: 'size_m',
  L: 'size_l',
};

type TTextProps = {
  className?: string;
  title?: string;
  text?: string;
  variant?: TObjectValue<typeof TextVariant>;
  align?: 'left' | 'center' | 'right';
  size?: keyof typeof TextSize;
}

export const Text: FC<TTextProps> = (props) => {
  const {
    className,
    title,
    text,
    variant = TextVariant.DEFAULT,
    align = 'left',
    size = 'M',
  } = props;

  const mod = {
    [cls[align]]: true,
    [cls[TextSize[size]]]: true,
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
