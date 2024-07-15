import { CSSProperties, FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Skeleton.module.scss';

type TSkeletonProps = {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<TSkeletonProps> = (props) => {
  const {
    className, width, height, border,
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={getClassName(cls.skeleton, {}, [className])} style={style} />
  );
};
