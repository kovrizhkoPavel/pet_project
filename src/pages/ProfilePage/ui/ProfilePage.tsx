import { FC, useCallback } from 'react';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { useParams } from 'react-router-dom';
import { getProfileState } from 'pages/ProfilePage/model/selectors/getProfileState/getProfileState';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileValidationError } from '../model/selectors/getProfileValidationError/getProfileValidationError';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import cls from './ProfilePage.module.scss';
import { fetchGetProfileData } from '../model/service/fetchGetProfileData/fetchGetProfileData';
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
  const profileValidationError = useSelector(getProfileValidationError);
  const { id } = useParams<{id : string}>();

  useAppUseEffect(() => {
    if (id) {
      setTimeout(() => dispatch(fetchGetProfileData(id)));
    }
  }, [dispatch]);

  useDynamicModuleLoader(initialReducers);

  const onFirstNameChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ firstname: value }));
  }, [dispatch]);

  const onLastNameChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ lastname: value }));
  }, [dispatch]);

  const onAgeChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ age: Number(value) }));
  }, [dispatch]);

  const onCityChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ city: value }));
  }, [dispatch]);

  const onAvatarChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ avatar: value }));
  }, [dispatch]);

  const onCurrencyChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ currency: value }));
  }, [dispatch]);

  const onCountryChange = useCallback((value: string) => {
    dispatch(profileActions.changeProfile({ country: value }));
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader className={cls.profilePageHeader} />
      <ProfileCard
        data={profileForm}
        isLoading={profileIsLoading}
        error={profileError}
        readonly={profileReadOnly}
        validationError={profileValidationError}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onAgeChange={onAgeChange}
        onCityChange={onCityChange}
        onAvatarChange={onAvatarChange}
        onCountryChange={onCountryChange}
        onCurrencyChange={onCurrencyChange}
      />
    </div>
  );
};

export default ProfilePage;
