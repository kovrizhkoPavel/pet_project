import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TProfile } from 'entities/Profile';
import { profileValidator } from 'features/ProfileForm/validator/profileValidator';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';
import { useEditProfileMutation } from '../model/api/profileFormApi';
import { profileFormActions } from '../model/slice/profileFormSlice';

export const useProfileForm = (initialData: TProfile | null) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id : string}>();
  const formData = useSelector(getProfileFormData);
  const [trigger, { isSuccess, isError, isLoading }] = useEditProfileMutation();
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

  const onButtonSubmit = useCallback(() => {
    if (!id) return;
    const validateError = profileValidator(formData);

    const isInvalid = Object.values(validateError).some(Boolean);
    if (isInvalid) {
      dispatch(profileFormActions.setValidationErrors(validateError));
      return;
    }
    dispatch(profileFormActions.setValidationErrors(undefined));
    trigger({
      ...formData,
      id,
    });
  }, [id, formData, trigger, dispatch]);

  useEffect(() => {
    if (!initialData) return;
    dispatch(profileFormActions.setInitialData(initialData));
  }, [initialData, dispatch]);

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(profileFormActions.setReadonly(true));
  }, [isSuccess, dispatch]);

  return {
    onFirstNameChange,
    onLastNameChange,
    onAgeChange,
    onCityChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange,
    onButtonSubmit,
    isError,
    isLoading,
  };
};
