import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/widgets/PageContainer';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t('translation\:title_main')}</h1>
      <RatingCard
        title="ff"
        modalTitle="sss"
        submitRatingHandler={(arg) => console.log(arg)}
      />
    </PageContainer>
  );
};

export default MainPage;
