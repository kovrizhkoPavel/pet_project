import { FC, memo } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import cls from './Avatar.module.scss';

type TAvatarProps = {
  src: string;
  className?: string;
  alt?: string;
  size?: number;
}

export const Avatar: FC<TAvatarProps> = memo((props) => {
  const {
    className, src, alt, size = 100,
  } = props;

  return (
    <img
      src={src}
      alt={alt || 'avatar'}
      className={getClassName(cls.avatar, {}, [className])}
      width={size}
      height={size}
    />
  );
});
