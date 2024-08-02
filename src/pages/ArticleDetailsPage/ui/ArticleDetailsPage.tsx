import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleComments } from 'features/ArticleComments';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchAddArticleComment } from '../model/services/fetchAddArticleComment';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();

  const onAddCommentFormSubmit = useCallback(() => {
    dispatch(fetchAddArticleComment());
  }, [dispatch]);

  if (!id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ArticleDetails id={id} />
      <AddCommentForm
        className={cls.addCommentForm}
        onSubmit={onAddCommentFormSubmit}
      />
      <ArticleComments id={id} />
    </>
  );
};

export default ArticleDetailsPage;
