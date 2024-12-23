import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getAuthData } from 'entities/User';
import { profileFormActions } from '../model/slice/profileFormSlice';
import { profileValidator } from '../validator/profileValidator';
import {
  getProfileInitialData,
} from '../model/selectors/getProfileFormInitialData/getProfileInitialData';
import {
  getProfileFormReadonly,
} from '../model/selectors/getProfileFormReadonly/getProfileFormReadonly';
import { useEditProfileMutation } from '../model/api/profileFormApi';
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData';

export const useProfileFormHeader = () => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);
  const profile = useSelector(getProfileInitialData);
  const canEdit = authData?.id === profile?.id;
  const isReadonly = useSelector(getProfileFormReadonly);
  const { id } = useParams<{id : string}>();
  const formData = useSelector(getProfileFormData);
  const [trigger] = useEditProfileMutation();

  const onEditButtonClick = useCallback(() => {
    dispatch(profileFormActions.setReadonly(false));
  }, [dispatch]);

  const onButtonReset = useCallback(() => {
    dispatch(profileFormActions.resetProfile());
  }, [dispatch]);

  const onButtonSubmit = useCallback(() => {
    if (!id) return;
    const validateError = profileValidator(formData);
    const isInvalid = Object.values(validateError).some(Boolean);
    if (isInvalid) {
      profileFormActions.setValidationErrors(validateError);
      return;
    }
    profileFormActions.setValidationErrors(undefined);
    trigger({
      ...formData,
      id,
    });
  }, [id, formData, trigger]);

  return {
    onEditButtonClick,
    onButtonSubmit,
    onButtonReset,
    canEdit,
    isReadonly,
  };
};
