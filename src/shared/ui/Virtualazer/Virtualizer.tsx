import { FC, ReactNode, useRef } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import cls from './Virtualazer.module.scss';

type TVirtualazerProps = {
  itemsCount: number;
  itemSize: number;
  itemsOverscan?: number;
  className?: string;
  children: (item: VirtualItem) => ReactNode;
  fetchNextPage: VoidFunction;
}

const defaultItemsOverscan = 5;

export const Virtualizer: FC<TVirtualazerProps> = (props) => {
  const {
    className,
    itemSize,
    itemsCount,
    itemsOverscan = defaultItemsOverscan,
    children,
    fetchNextPage,
  } = props;

  const parentRef = useRef(null);

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemsCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    gap: 24,
    overscan: itemsOverscan,
  });

  useAppUseEffect(() => {
    const lastItem = getVirtualItems().at(-1);

    if (!lastItem) return;

    if (lastItem.index >= itemsCount - 1) {
      fetchNextPage();
    }
  }, [fetchNextPage, itemsCount, getVirtualItems()]);

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
        {getVirtualItems().map((item) => (
          <div
            key={item.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${item.size}px`,
              transform: `translateY(${item.start}px)`,
            }}
          >
            {children(item)}
          </div>
        ))}
      </div>
    </div>
  );
};
