import { FC, useRef } from 'react';
import { Virtualizer } from 'shared/ui/Virtualazer/Virtualizer';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useScrollPosition } from 'shared/lib/hooks/useScrollPosition';
import { CardSmall } from 'entities/Article/ui/ArticleList/CardSmall/CardSmall';
import { CARD_BIG_HEIGHT } from './constants';
import { CardBig } from './CardBig/CardBig';
import { SkeletonList } from './SkeletonList/SkeletonList';
import { ArticlesView } from '../../constants';
import cls from './ArticleList.module.scss';
import { TArticle, TArticlesView } from '../../model/types/article';

type TArticleListProps = {
  className?: string;
  isLoading?: boolean;
  view: TArticlesView;
  articles: TArticle[];
  fetchNextPage: VoidFunction;
}

export const ArticleList: FC<TArticleListProps> = (props) => {
  const parentRef = useRef(null);
  const onScroll = useScrollPosition(parentRef);
  const {
    className, view, articles, isLoading, fetchNextPage,
  } = props;
  const isViewList = view === ArticlesView.TILE;
  const estimateSize = isViewList ? CARD_BIG_HEIGHT : 300;

  const mods = {
    [cls.viewTile]: !isViewList,
  };

  if (isLoading && articles.length === 0) {
    return <SkeletonList className={cls.skeletonList} view={view} />;
  }

  return (
    <div
      ref={parentRef}
      onScroll={onScroll}
      className={getClassName(cls.articleList, {}, [className])}
    >
      {/* {articles.map((article) => (view === ArticlesView.LIST */}
      {/*  ? <CardBig className={cls.listCard} article={article} key={article.id} /> */}
      {/*  : <CardSmall className={cls.tileCard} article={article} key={article.id} /> */}
      {/* ))} */}
      <Virtualizer
        itemsCount={articles.length}
        estimateSize={estimateSize}
        fetchNextPage={fetchNextPage}
        parentRef={parentRef}
      >
        {({ index }) => (
          isViewList ? (
            <CardBig
              isLoading={!!isLoading && index === articles.length - 1}
              height={CARD_BIG_HEIGHT}
              className={cls.listCard}
              article={articles[index]}
            />
          ) : <CardSmall className={cls.tileCard} article={articles[index]} />
        )}
      </Virtualizer>
    </div>
  );
};
