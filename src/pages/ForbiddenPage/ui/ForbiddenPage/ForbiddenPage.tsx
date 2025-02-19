import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/widgets/PageContainer';

export const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t('translation\:title_forbidden')}</h1>
    </PageContainer>
  );
};
