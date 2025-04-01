import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '@/widgets/PageContainer';
import { EditProfileForm } from '@/features/ProfileForm';
import { useGetProfileDataQuery } from '../model/api/profileApi';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isFetching, isError } = useGetProfileDataQuery(`${id}`, {
    skip: !id,
  });

  return (
    <PageContainer>
      <h1>{t('translation\:title_profile')}</h1>
      <EditProfileForm
        isError={isError}
        isLoading={isFetching}
        initialData={data?.length ? data[0] : null}
      />
    </PageContainer>
  );
};

export default ProfilePage;
