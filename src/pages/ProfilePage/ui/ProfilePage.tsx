import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, TReducers } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducers } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfilePage.module.scss';

const initialReducers: TReducers = {
  profile: profileReducers,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} remountAfterUnmount>
      <div>
        <h2>{t('translation\:title_profile')}</h2>
        <div className={cls.profileCard}>
          <ProfileCard />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
