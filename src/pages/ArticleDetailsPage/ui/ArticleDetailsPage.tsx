import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation\:title_articles_details')}
    </div>
  );
};

export default ArticleDetailsPage;
