import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation\:title_profile')}
    </div>
  );
};

export default ProfilePage;
