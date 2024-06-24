import { FC, useEffect } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { getData, getError, getIsLoading } from '../../model/selectors/getArticleDetails';

type TArticleDetailsProps = {
  id: string;
  className?: string;
}

const initialReducer: TReducers = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className, id }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const data = useSelector(getData);

  useDynamicModuleLoader(initialReducer, true);
  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (error) {
    return <Text title={error} variant={TextVariant.ERROR} />;
  }

  if (true) {
    return (
      <>
        <Skeleton width={200} height={200} border="50%" className={cls.skeletonAvatar} />
        <Skeleton height={300} className={cls.skeleton} />
        <Skeleton height={200} className={cls.skeleton} />
        <Skeleton height={200} className={cls.skeleton} />
      </>
    );
  }

  return (
    <div className={getClassName(cls.articleDetails, {}, [className])}>
      {t('translation\:title_articles_details')}
    </div>
  );
};
