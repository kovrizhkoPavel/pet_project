import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleComments } from 'features/ArticleComments';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { PageContainer } from 'widgets/PageContainer';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { ArticlesRecommendations } from 'features/ArticlesRecommendations';
import { articleDetailsPageMainReducer } from '../model/reducers/articleDetailsPageMainReducer';
import { fetchAddArticleComment } from '../model/services/fetchAddArticleComment';
import cls from './ArticleDetailsPage.module.scss';
import { getIsInit } from '../model/selectors/getArticleDetailsPageState';
import { articleDetailsPageActions } from '../model/slice/articleDetailsPageSlice';

const initialReducer: TReducers = {
  articleDetailsPage: articleDetailsPageMainReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const isInit = useSelector(getIsInit);

  useDynamicModuleLoader(initialReducer);

  const onAddCommentFormSubmit = useCallback(() => {
    dispatch(fetchAddArticleComment());
  }, [dispatch]);

  useEffect(() => {
    dispatch(articleDetailsPageActions.init());
  }, [dispatch]);

  if (!id) return <NotFoundPage />;

  if (!isInit) return null;

  return (
    <PageContainer>
      <ArticleDetails id={id} />
      <ArticlesRecommendations />
      <AddCommentForm
        className={cls.addCommentForm}
        onSubmit={onAddCommentFormSubmit}
      />
      <ArticleComments id={id} />
    </PageContainer>
  );
};

export default ArticleDetailsPage;
