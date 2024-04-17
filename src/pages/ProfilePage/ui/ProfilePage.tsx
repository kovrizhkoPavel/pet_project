import { FC, useCallback, useEffect } from 'react';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateSchema';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'pages/ProfilePage/model/selectors/getProfileForm/getProfileForm';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
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
  const profileForm = useSelector(getProfileForm);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileError = useSelector(getProfileError);
  const profileReadOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    setTimeout(() => dispatch(fetchProfileData()));
  }, [dispatch]);

  useDynamicModuleLoader(initialReducers, true);

  const onFirstNameChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ firstname: value }));
  }, [dispatch]);

  const onLastNameChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ lastname: value }));
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
      <div className={cls.profileCard}>
        <ProfileCard
          data={profileForm}
          isLoading={profileIsLoading}
          error={profileError}
          readonly={profileReadOnly}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
