import { FC, useRef } from 'react';
import { CardBig } from 'entities/Article/ui/ArticleList/CardBig/CardBig';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Virtualizer } from 'shared/ui/Virtualazer/Virtualizer';
import { CARD_BIG_HEIGHT } from 'entities/Article/ui/ArticleList/constants';
import { SkeletonList } from './SkeletonList/SkeletonList';
import { ArticlesView } from '../../constants';
import cls from './ArticleList.module.scss';
import { TArticle, TArticlesView } from '../../model/types/article';

type TArticleListProps = {
  className?: string;
  isLoading?: boolean;
  view: TArticlesView;
  articles: TArticle[];
}

const data = new Array(500).fill('').map((_, i) => i);

function RowVirtualizerFixed() {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: '500px',
          width: '400px',
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div className={cls.test}>
                <h1>{data[virtualRow.index]}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const ArticleList: FC<TArticleListProps> = (props) => {
  const parentRef = useRef(null);
  const {
    className, view, articles, isLoading,
  } = props;

  const mods = {
    [cls.viewTile]: view === ArticlesView.TILE,
  };

  if (isLoading) {
    return <SkeletonList className={className} view={view} />;
  }

  return (
    <div className={className} ref={parentRef}>
      {/* {articles.map((article) => (view === ArticlesView.LIST */}
      {/*  ? <CardBig className={cls.listCard} article={article} key={article.id} /> */}
      {/*  : <CardSmall className={cls.tileCard} article={article} key={article.id} /> */}
      {/* ))} */}
      {/* <RowVirtualizerFixed /> */}
      <Virtualizer className={cls.virtualizer} itemsCount={articles.length} itemSize={CARD_BIG_HEIGHT}>
        {({ indexItem }) => (
          <CardBig
            height={CARD_BIG_HEIGHT}
            className={cls.listCard}
            article={articles[indexItem]}
          />
        )}
      </Virtualizer>
    </div>
  );
};
