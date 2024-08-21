import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Card } from 'shared/ui/Card/Card';
import { TArticle } from 'entities/Article/model/types/article';
import cls from './CardSmall.module.scss';
import { ViewsCount } from '../ViewsCount/ViewsCount';

type TCardSmallProps = {
  className?: string;
  article: TArticle;
}

export const CardSmall: FC<TCardSmallProps> = ({ className, article }) => {
  const {
    createdAt,
    type,
    views,
    title,
    img,
  } = article;

  return (
    <Card className={getClassName(cls.cardSmall, {}, [className])}>
      <img className={cls.img} src={img} alt="logo" />
      <div className={cls.date}>{createdAt}</div>
      <div className={cls.categoriesWrap}>
        <div className={cls.categories}>{type.join(', ')}</div>
        <ViewsCount count={views} />
      </div>
      <div>{title}</div>
    </Card>
  );
};