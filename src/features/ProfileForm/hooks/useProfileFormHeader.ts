import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getAuthData } from 'entities/User';
import { profileFormActions } from '../model/slice/profileFormSlice';
import { getProfileInitialData } from '../model/selectors/getProfileFormInitialData/getProfileInitialData';
import { getProfileFormReadonly } from '../model/selectors/getProfileFormReadonly/getProfileFormReadonly';

export const useProfileFormHeader = () => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);
  const profile = useSelector(getProfileInitialData);
  const canEdit = authData?.id === profile?.id;

  const isReadonly = useSelector(getProfileFormReadonly);

  const onEditButtonClick = useCallback(() => {
    dispatch(profileFormActions.setReadonly(false));
  }, [dispatch]);

  const onButtonReset = useCallback(() => {
    dispatch(profileFormActions.resetProfile());
  }, [dispatch]);

  return {
    onEditButtonClick,
    onButtonReset,
    canEdit,
    isReadonly,
  };
};
