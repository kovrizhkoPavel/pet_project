import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

const ArticleDetailsPage = () => {
  const { id } = useParams<{id: string}>();

  if (!id) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default ArticleDetailsPage;
