import { FC, ReactNode, useRef } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { useScrollPosition } from '@/shared/lib/hooks/useScrollPosition';
import cls from './PageContainer.module.scss';

type TPageContainerProps = {
  className?: string;
  children: ReactNode;
}

export const PageContainer: FC<TPageContainerProps> = ({ className, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const onScroll = useScrollPosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      onScroll={onScroll}
      className={getClassName(cls.pageContainer, {}, [className])}
    >
      {children}
    </section>
  );
};
