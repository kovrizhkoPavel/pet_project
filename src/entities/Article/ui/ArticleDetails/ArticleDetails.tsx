import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';

type TArticleDetailsProps = {
  className?: string;
}

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.articleDetails, {}, [className])}>
      {t('translation\:title_articles_details')}
    </div>
  );
};
