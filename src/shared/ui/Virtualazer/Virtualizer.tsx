import {
  FC, ReactNode, RefObject, useEffect, useState,
} from 'react';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';

type TVirtualazerProps = {
  itemsCount: number;
  itemSize: number;
  itemsOverscan?: number;
  children: (item: VirtualItem) => ReactNode;
  fetchNextPage: VoidFunction;
  parentRef: RefObject<HTMLElement>;
}

const defaultItemsOverscan = 5;

export const Virtualizer: FC<TVirtualazerProps> = (props) => {
  const [shouldReset, setShouldReset] = useState(false);
  const {
    itemSize,
    itemsCount,
    itemsOverscan = defaultItemsOverscan,
    children,
    fetchNextPage,
    parentRef,
  } = props;

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemsCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemSize,
    gap: 24,
    overscan: itemsOverscan,
    enabled: shouldReset,
  });

  useAppUseEffect(() => {
    const lastItem = getVirtualItems().at(-1);

    if (!lastItem) return;

    if (lastItem.index >= itemsCount - 1) {
      fetchNextPage();
    }
  }, [fetchNextPage, itemsCount, getVirtualItems()]);

  useEffect(() => {
    if (parentRef.current) {
      setShouldReset(true);
    }
  }, [parentRef]);

  return (
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
  );
};
