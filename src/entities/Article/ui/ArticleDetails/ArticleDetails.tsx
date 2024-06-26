import { FC, useEffect } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { TArticle } from '../../model/types/article';
import { ArticleAvatar } from '../ArticleAvatar/ArticleAvatar';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { getData, getError, getIsLoading } from '../../model/selectors/getArticleDetails';
import { ArticleInfo } from '../ArticleInfo/ArticleInfo';

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
  const data: TArticle | null = useSelector(getData);

  useDynamicModuleLoader(initialReducer, true);
  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (error) {
    return <Text title={error} variant={TextVariant.ERROR} />;
  }

  return (
    <div className={getClassName(cls.articleDetails, {}, [className])}>
      <div className={cls.avatarWrapper}>
        <ArticleAvatar />
      </div>
      <ArticleInfo />

    </div>
  );
};
