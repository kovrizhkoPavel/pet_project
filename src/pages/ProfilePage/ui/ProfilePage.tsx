import { FC, useEffect } from 'react';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateSchema';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileReducer } from '../model/slice/profileSlice';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import cls from './ProfilePage.module.scss';
import { fetchProfileData } from '../model/service/fetchProfileData/fetchProfileData';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';

const initialReducers: TReducers = {
  profile: profileReducer,
};
const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const profileData = useSelector(getProfileData);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileError = useSelector(getProfileError);
  const profileReadOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    setTimeout(() => dispatch(fetchProfileData()));
  }, [dispatch]);

  useDynamicModuleLoader(initialReducers, true);

  return (
    <div>
      <ProfilePageHeader />
      <div className={cls.profileCard}>
        <ProfileCard
          data={profileData}
          isLoading={profileIsLoading}
          error={profileError}
          readonly={profileReadOnly}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
