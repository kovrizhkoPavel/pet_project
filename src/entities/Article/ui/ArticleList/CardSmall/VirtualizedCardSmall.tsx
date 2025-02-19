import { CSSProperties, RefObject } from 'react';
import { VirtualItem } from '@tanstack/react-virtual';
import { Virtualizer } from '@/shared/ui/Virtualazer/Virtualizer';
import { CardSmall } from './CardSmall';
import { TArticle } from '../../../model/types/article';

type VirtualizedCardSmallProps = {
  fetchNextPage: VoidFunction;
  parentRef: RefObject<HTMLElement>;
  isLoading: boolean;
  articles: TArticle[];
  className?: string;
}

const getItemStyles = (item: VirtualItem): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: `${item.lane * 240}px`,
  width: '220px',
  height: `${item.size}px`,
  transform: `translateY(${item.start}px)`,
});

export const CARD_BIG_SMALL = 300;
export const VirtualizedCardSmall = (props: VirtualizedCardSmallProps) => {
  const {
    parentRef, isLoading, articles, className, fetchNextPage,
  } = props;

  return (
    <Virtualizer
      itemsCount={articles.length}
      estimateSize={CARD_BIG_SMALL}
      fetchNextPage={fetchNextPage}
      parentRef={parentRef}
      itemStyles={getItemStyles}
      lanes={5}
    >
      {({ index }) => (
        <CardSmall
          isLoading={isLoading}
          className={className}
          article={articles[index]}
        />
      )}
    </Virtualizer>
  );
};
