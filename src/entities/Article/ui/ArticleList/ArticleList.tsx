import { FC, useRef } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { useScrollPosition } from '@/shared/lib/hooks/useScrollPosition';
import { VirtualizedCardBig } from './CardBig/VirtualizedCardBig';
import { VirtualizedCardSmall } from './CardSmall/VirtualizedCardSmall';
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
  const isViewList = view === ArticlesView.LIST;

  if (isLoading && articles.length === 0) {
    return <SkeletonList className={cls.skeletonList} view={view} />;
  }

  return (
    <div
      ref={parentRef}
      onScroll={onScroll}
      className={getClassName(cls.articleList, {}, [className])}
    >
      {isViewList ? (
        <VirtualizedCardBig
          articles={articles}
          fetchNextPage={fetchNextPage}
          parentRef={parentRef}
          isLoading={!!isLoading && articles.length > 1}
          className={cls.listCard}
        />
      ) : (
        <VirtualizedCardSmall
          articles={articles}
          fetchNextPage={fetchNextPage}
          parentRef={parentRef}
          isLoading={!!isLoading && articles.length > 1}
          className={cls.tileCard}
        />
      )}
    </div>
  );
};
