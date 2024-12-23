import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { TProfile } from 'entities/Profile';
import { profileFormActions } from '../model/slice/profileFormSlice';

export const useProfileForm = (initialData: TProfile | null) => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    if (!initialData) return;
    dispatch(profileFormActions.setInitialData(initialData));
  }, [initialData, dispatch]);

  return {
    onFirstNameChange,
    onLastNameChange,
    onAgeChange,
    onCityChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange,
  };
};
