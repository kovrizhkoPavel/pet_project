import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { TArticle } from '../../../model/types/article';
import cls from './CardSmall.module.scss';
import { ViewsCount } from '../ViewsCount/ViewsCount';

type TCardSmallProps = {
  article: TArticle;
  isLoading?: boolean;
  className?: string;
  target?: '_blank' | '_self'
}

export const CardSmall: FC<TCardSmallProps> = (props) => {
  const {
    className, article, target, isLoading,
  } = props;
  const {
    createdAt,
    type,
    views,
    title,
    img,
  } = article;

  if (isLoading) {
    return (
      <Skeleton
        className={cls.skeleton}
        width={210}
        height={230}
      />
    );
  }

  return (
    <AppLink target={target} to={`${RoutePath.article_details}${article.id}`}>
      <Card className={getClassName(cls.cardSmall, {}, [className])}>
        <img className={cls.img} src={img} alt="logo" />
        <div className={cls.date}>{createdAt}</div>
        <div className={cls.categoriesWrap}>
          <div className={cls.categories}>{type.join(', ')}</div>
          <ViewsCount count={views} />
        </div>
        <div>{title}</div>
      </Card>
    </AppLink>
  );
};
