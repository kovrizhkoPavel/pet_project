import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ArticlesView } from 'entities/Article/constants';
import { CardSmall } from 'entities/Article/ui/ArticleList/CardSmall/CardSmall';
import cls from './ArticleList.module.scss';
import { TArticle, TArticlesView } from '../../model/types/article';

type TArticleListProps = {
  className?: string;
  view: TArticlesView;
  articles: TArticle[];
}

export const ArticleList: FC<TArticleListProps> = (props) => {
  const { className, view, articles } = props;

  const mods = {
    [cls.viewTile]: view === ArticlesView.TILE,
  };

  return (
    <div className={getClassName(cls.articleList, mods, [className])}>
      {new Array(20).fill(articles[0]).map((article) => <CardSmall className={cls.tileCard} article={article} />)}
    </div>
  );
};
