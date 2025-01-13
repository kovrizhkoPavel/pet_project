import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'widgets/PageContainer';

const AdminPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <h1>{t('translation\:title_admin')}</h1>
    </PageContainer>
  );
};

export default AdminPage;
