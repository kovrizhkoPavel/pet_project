import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, TReducers } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { profileReducers } from '../model/slice/profileSlice';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import cls from './ProfilePage.module.scss';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';

const initialReducers: TReducers = {
  profile: profileReducers,
};

const ProfilePage: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} remountAfterUnmount>
      <div>
        <h2>{t('translation\:title_profile')}</h2>
        <div className={cls.profileCard}>
          <ProfileCard data={profileData} />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
