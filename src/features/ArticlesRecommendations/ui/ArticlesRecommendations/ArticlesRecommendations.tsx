import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { ArticlesView } from 'entities/Article/constants';
import { useEffect } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesReccomendations.module.scss';
import {
  fetchGetArticlesRecommendations,
} from '../../model/services/fetchGetArticlesRecommendations/fetchGetArticlesRecommendations';
import { getArticles, getIsLoading } from '../../model/selectors/getArticlesRecommendations';

export const ArticlesRecommendations = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const articles = useSelector(getArticles);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchGetArticlesRecommendations());
  }, [dispatch]);

  return (
    <>
      <Text
        size="L"
        className={cls.title}
        text={t('translation\:article_recommendation_title')}
      />
      <ArticleList
        view={ArticlesView.TILE}
        articles={articles}
        isLoading={isLoading}
      />

    </>
  );
};
