import { ProfileCard, TProfile } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { ProfileFormHeader } from '../ProfileFormHeader/ProfileFormHeader';
import { profileFormActions } from '../../model/slice/profileFormSlice';
import {
  getProfileFormReadonly,
} from '../../model/selectors/getProfileFormReadonly/getProfileFormReadonly';

type TEditProfileFormProps = {
  className?: string;
  initialData: TProfile | null;
  isLoading: boolean;
  isError: boolean;
}

export const EditProfileForm = (props: TEditProfileFormProps) => {
  const {
    className, initialData, isLoading, isError,
  } = props;

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const isReadOnly = useSelector(getProfileFormReadonly);

  useEffect(() => {
    if (!initialData) return;
    dispatch(profileFormActions.setInitialData(initialData));
  }, [initialData, dispatch]);

  const onFirstNameChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ firstname: value }));
  }, [dispatch]);

  const onLastNameChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ lastname: value }));
  }, [dispatch]);

  const onAgeChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ age: Number(value) }));
  }, [dispatch]);

  const onCityChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ city: value }));
  }, [dispatch]);

  const onAvatarChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ avatar: value }));
  }, [dispatch]);

  const onCurrencyChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ currency: value }));
  }, [dispatch]);

  const onCountryChange = useCallback((value: string) => {
    dispatch(profileFormActions.changeProfile({ country: value }));
  }, [dispatch]);

  return (
    <div className={className}>
      <ProfileFormHeader />
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={isError}
        readonly={isReadOnly}
        validationError={{ firstname: '', lastname: '', age: '1' }}
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
