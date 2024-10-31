import { FC, ReactNode, useRef } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useVirtualizer } from '@tanstack/react-virtual';
import cls from './Virtualazer.module.scss';

type TVirtualazerProps = {
  itemsCount: number;
  itemSize: number;
  itemsOverscan?: number;
  className?: string;
  children: ({ indexItem }: {indexItem: number}) => ReactNode;
}

const defaultItemsOverscan = 5;

export const Virtualizer: FC<TVirtualazerProps> = (props) => {
  const {
    className,
    itemSize,
    itemsCount,
    itemsOverscan = defaultItemsOverscan,
    children,
  } = props;

  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemsCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    gap: 24,
    overscan: itemsOverscan,
  });

  return (
    <div
      ref={parentRef}
      className={getClassName(cls.virtualazer, {}, [className])}
    >
      <div
        style={{
          height: `${getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {getVirtualItems().map(({ index, size, start }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${size}px`,
              transform: `translateY(${start}px)`,
            }}
          >
            {children({ indexItem: index })}
          </div>
        ))}
      </div>
    </div>
  );
};
