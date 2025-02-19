import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/widgets/PageContainer';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t('translation\:title_main')}</h1>
    </PageContainer>
  );
};

export default MainPage;
