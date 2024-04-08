import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, TReducers } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducers } from 'entities/Profile';

const initialReducers: TReducers = {
  profile: profileReducers,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={initialReducers} remountAfterUnmount>
      <div>
        {t('translation\:title_profile')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
