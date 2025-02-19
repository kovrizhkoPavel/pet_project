import { CSSProperties, RefObject } from 'react';
import { VirtualItem } from '@tanstack/react-virtual';
import { Virtualizer } from '@/shared/ui/Virtualazer/Virtualizer';
import { CardBig } from './CardBig';
import { TArticle } from '../../../model/types/article';

type VirtualizedCardBigProps = {
  fetchNextPage: VoidFunction;
  parentRef: RefObject<HTMLElement>;
  isLoading: boolean;
  articles: TArticle[];
  className?: string;
}

const getItemStyles = (item: VirtualItem): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: `${item.size}px`,
  transform: `translateY(${item.start}px)`,
});

export const CARD_BIG_HEIGHT = 576;

export const VirtualizedCardBig = (props: VirtualizedCardBigProps) => {
  const {
    parentRef, isLoading, articles, className, fetchNextPage,
  } = props;

  return (
    <Virtualizer
      itemsCount={articles.length}
      estimateSize={CARD_BIG_HEIGHT}
      fetchNextPage={fetchNextPage}
      parentRef={parentRef}
      itemStyles={getItemStyles}
    >
      {({ index }) => (
        <CardBig
          isLoading={isLoading}
          height={CARD_BIG_HEIGHT}
          className={className}
          article={articles[index]}
        />
      )}
    </Virtualizer>
  );
};
