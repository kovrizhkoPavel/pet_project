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

  const onAgeChange = useCallback((value: string) => {
    if (!/^\d+$/.test(value)) return;
    dispatch(profileActions.changeProfile({ age: Number(value) }));
  }, [dispatch]);

  const onCityChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ city: value }));
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader className={cls.profilePageHeader} />
      <ProfileCard
        data={profileForm}
        isLoading={profileIsLoading}
        error={profileError}
        readonly={profileReadOnly}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onAgeChange={onAgeChange}
        onCityChange={onCityChange}
      />
    </div>
  );
};

export default ProfilePage;
