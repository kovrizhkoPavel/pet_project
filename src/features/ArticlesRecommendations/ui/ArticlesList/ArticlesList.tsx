import { TArticle } from '@/entities/Article/model/types/article';
import { ArticlesView } from '@/entities/Article/constants';
import { SkeletonList } from '@/entities/Article/ui/ArticleList/SkeletonList/SkeletonList';
import { CardSmall } from '@/entities/Article/ui/ArticleList/CardSmall/CardSmall';
import cls from './ArticlesList.module.scss';

type TArticlesListProps = {
  isLoading: boolean;
  articles: TArticle[];
};

export const ArticlesList = (props: TArticlesListProps) => {
  const { isLoading, articles } = props;

  if (isLoading) {
    return <SkeletonList view={ArticlesView.TILE} />;
  }

  return (
    <div className={cls.articlesList}>
      {articles.map((article) => (
        <CardSmall
          target="_blank"
          className={cls.tileCard}
          article={article}
          key={article.id}
        />
      ))}
    </div>
  );
};
