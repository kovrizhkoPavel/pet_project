import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CardBig.module.scss';

type TSkeletonCardProps = {
  className?: string;
}

export const SkeletonCard: FC<TSkeletonCardProps> = ({ className }) => (
  <div className={getClassName(cls.skeletonCard, {}, [className])}>
    <div className={cls.header}>
      <div className={cls.userContainer}>
        <Skeleton border="50%" width={30} height={30} />
        <Skeleton className={cls.username} width={150} height={16} />
      </div>
      <Skeleton width={110} height={16} />
    </div>
    <Skeleton width={500} height={30} className={cls.title} />
    <div className={cls.view}>
      <Skeleton width={50} height={16} />
      <Skeleton width={50} height={16} />
    </div>
    <Skeleton className={cls.img} height={250} />
    <Skeleton className={cls.textBlock} />
    <Skeleton />
  </div>
);
