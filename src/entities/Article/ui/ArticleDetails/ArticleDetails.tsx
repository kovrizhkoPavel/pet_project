import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { TReducers } from 'shared/types/stateSchema';
import cls from './ArticleDetails.module.scss';

type TArticleDetailsProps = {
  className?: string;
}

const initialReducer: TReducers = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className }) => {
  const { t } = useTranslation();
  useDynamicModuleLoader(initialReducer, true);

  return (
    <div className={getClassName(cls.articleDetails, {}, [className])}>
      {t('translation\:title_articles_details')}
    </div>
  );
};
