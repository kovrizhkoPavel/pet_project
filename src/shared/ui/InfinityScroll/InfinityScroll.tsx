import { FC, ReactNode, useRef } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from 'shared/lib/hooks/useIntersectionObserver';
import cls from './InfinityScroll.module.scss';

type TInfinityScrollProps = {
  className?: string;
  children?: ReactNode;
  cb: VoidFunction;
}

export const InfinityScroll: FC<TInfinityScrollProps> = (props) => {
  const { cb, className, children } = props;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const observeRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    rootRef,
    observeRef,
    cb,
  });

  return (
    <div ref={rootRef} className={className}>
      {children}
      <div ref={observeRef} />
    </div>
  );
};
