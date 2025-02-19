import { FC } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

type TPageLoaderProps = {
  className?: string;
}

export const PageLoader: FC<TPageLoaderProps> = ({ className }) => (
  <div className={getClassName(cls.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
