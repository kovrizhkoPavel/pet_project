import { FC, ReactNode, useRef } from 'react';
import { useIntersectionObserver } from 'shared/lib/hooks/useIntersectionObserver';

type TInfinityScrollProps = {
  className?: string;
  children?: ReactNode;
  cb: VoidFunction;
}

export const InfinityScroll: FC<TInfinityScrollProps> = (props) => {
  const { cb, className, children } = props;
  const observeRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver({
    rootRef: null,
    observeRef,
    cb,
  });

  return (
    <div className={className}>
      {children}
      <div ref={observeRef} />
    </div>
  );
};
