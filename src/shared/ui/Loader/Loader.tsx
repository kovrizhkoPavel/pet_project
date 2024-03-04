import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Loader.module.scss';

type TLoaderProps = {
  className?: string;
}

export const Loader: FC<TLoaderProps> = ({ className }) => (
  <div className={getClassName(cls.loader, {}, [className])} />
);
