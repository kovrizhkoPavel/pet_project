import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Avatar.module.scss';

type TAvatarProps = {
  src: string;
  className?: string;
  alt?: string;
}

export const Avatar: FC<TAvatarProps> = (props) => {
  const { className, src, alt } = props;

  return (
    <img
      src={src}
      alt={alt || 'avatar'}
      className={getClassName(cls.avatar, {}, [className])}
    />
  );
};
