import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { SkeletonList } from './SkeletonList/SkeletonList';
import { ArticlesView } from '../../constants';
import { CardSmall } from './CardSmall/CardSmall';
import cls from './ArticleList.module.scss';
import { TArticle, TArticlesView } from '../../model/types/article';

type TArticleListProps = {
  className?: string;
  isLoading?: boolean;
  view: TArticlesView;
  articles: TArticle[];
}

export const ArticleList: FC<TArticleListProps> = (props) => {
  const {
    className, view, articles, isLoading,
  } = props;

  const mods = {
    [cls.viewTile]: view === ArticlesView.TILE,
  };

  if (isLoading) {
    return <SkeletonList view={view} />;
  }

  return (
    <div className={getClassName(cls.articleList, mods, [className])}>
      {new Array(20).fill(articles[0]).map((article) => <CardSmall className={cls.tileCard} article={article} />)}
    </div>
  );
};
