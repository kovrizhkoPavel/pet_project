import { FC, useRef } from 'react';
import { CardBig } from 'entities/Article/ui/ArticleList/CardBig/CardBig';
import { Virtualizer } from 'shared/ui/Virtualazer/Virtualizer';
import { CARD_BIG_HEIGHT } from 'entities/Article/ui/ArticleList/constants';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useScrollPosition } from 'shared/lib/hooks/useScrollPosition';
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

  const mods = {
    [cls.viewTile]: view === ArticlesView.TILE,
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
      {/* <RowVirtualizerFixed /> */}
      <Virtualizer
        itemsCount={articles.length}
        itemSize={CARD_BIG_HEIGHT}
        fetchNextPage={fetchNextPage}
        parentRef={parentRef}
      >
        {({ index }) => (
          <CardBig
            isLoading={!!isLoading && index === articles.length - 1}
            height={CARD_BIG_HEIGHT}
            className={cls.listCard}
            article={articles[index]}
          />
        )}
      </Virtualizer>
    </div>
  );
};
