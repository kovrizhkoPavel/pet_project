import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation\:title_articles')}
    </div>
  );
};

export default ArticlesPage;
