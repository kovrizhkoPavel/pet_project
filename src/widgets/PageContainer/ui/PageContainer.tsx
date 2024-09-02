import { FC, ReactNode } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './PageContainer.module.scss';

type TPageContainerProps = {
  className?: string;
  children: ReactNode
}

export const PageContainer: FC<TPageContainerProps> = ({ className, children }) => (
  <section className={getClassName(cls.pageContainer, {}, [className])}>
    {children}
  </section>
);
