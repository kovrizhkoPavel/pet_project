import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/constants';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { TArticle, TArticleBlockText } from '../../../model/types/article';
import { SkeletonCard } from './SkeletonCard';
import { ViewsCount } from '../ViewsCount/ViewsCount';
import { ArticleBlockType } from '../../../constants';
import { ArticleTextBlock } from '../../ArticleTextBlock/ArticleTextBlock';
import cls from './CardBig.module.scss';

type TCardBigProps = {
  className?: string;
  isLoading: boolean;
  article: TArticle;
  height: number;
};

export const CardBig: FC<TCardBigProps> = (props) => {
  const { className, article, height, isLoading } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { createdAt, type, views, title, img, user, blocks } = article;

  const textBlock: TArticleBlockText | undefined = blocks.find(
    (block): block is TArticleBlockText => block.type === ArticleBlockType.TEXT,
  );

  const onReadMoreClick = useCallback(() => {
    navigate(`${RoutePath.article_details}${article.id}`);
  }, [article, navigate]);

  if (isLoading) {
    return <SkeletonCard className={cls.skeletonCard} />;
  }

  return (
    <article
      style={{ height }}
      className={getClassName(cls.cardBig, {}, [className])}
    >
      <div className={cls.header}>
        <AppLink
          className={cls.userContainer}
          to={`${RoutePath.profile}${user.id}`}
        >
          <Avatar size={30} src={`${user.avatar}`} alt="avatar" />
          <p className={cls.username}>{user.username}</p>
        </AppLink>
        <div>{createdAt}</div>
      </div>
      <h2>{title}</h2>
      <div>{type.join(', ')}</div>
      <img src={img} alt="logo" className={cls.img} />
      {textBlock && (
        <ArticleTextBlock content={textBlock} className={cls.textBlock} />
      )}
      <div className={cls.footer}>
        <Button variant={ButtonVariant.OUTLINE} onClick={onReadMoreClick}>
          {t('translation\:button_read_mode')}
        </Button>
        <ViewsCount count={views} />
      </div>
    </article>
  );
};
