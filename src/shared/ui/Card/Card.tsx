import { FC, ReactNode } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Card.module.scss';

type TCardProps = {
  className?: string;
  children?: ReactNode;
}

export const Card: FC<TCardProps> = ({ className, children }) => (
  <div className={getClassName(cls.card, {}, [className])}>
    {children}
  </div>
);
