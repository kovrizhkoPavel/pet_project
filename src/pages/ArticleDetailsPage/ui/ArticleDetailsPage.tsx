import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleComments } from 'features/ArticleComments';
import { useCallback } from 'react';

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();

  const onAddCommentFormSubmit = useCallback(() => {}, []);

  if (!id) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ArticleDetails id={id} />
      <AddCommentForm onSubmit={onAddCommentFormSubmit} />
      <ArticleComments id={id} />
    </>
  );
};

export default ArticleDetailsPage;
