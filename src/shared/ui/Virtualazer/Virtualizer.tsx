import {
  CSSProperties, FC, ReactNode, RefObject, useEffect, useState,
} from 'react';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { useAppUseEffect } from '@/shared/lib/hooks/useAppUseEffect';

type TVirtualazerProps = {
  itemsCount: number;
  estimateSize: number;
  itemsOverscan?: number;
  lanes?: number;
  children: (item: VirtualItem) => ReactNode;
  fetchNextPage: VoidFunction;
  parentRef: RefObject<HTMLElement>;
  itemStyles: (item: VirtualItem) => CSSProperties;
}

const defaultItemsOverscan = 5;

export const Virtualizer: FC<TVirtualazerProps> = (props) => {
  const [shouldReset, setShouldReset] = useState(false);
  const {
    estimateSize,
    itemsCount,
    itemsOverscan = defaultItemsOverscan,
    children,
    fetchNextPage,
    parentRef,
    lanes,
    itemStyles,
  } = props;

  const { getTotalSize, getVirtualItems } = useVirtualizer({
    count: itemsCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateSize,
    gap: 24,
    overscan: itemsOverscan,
    enabled: shouldReset,
    lanes,
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
  }, [parentRef, lanes]);

  return (
    <div
      style={{
        height: `${getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
    >
      {getVirtualItems().map((item) => (
        <div key={item.index} style={itemStyles(item)}>
          {children(item)}
        </div>
      ))}
    </div>
  );
};
