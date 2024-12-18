import { useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { useParams } from 'react-router-dom';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { profileFormActions, profileFormReducer } from '../../model/slice/profileFormSlice';
import { ProfileButtonGroup } from '../ProfileButtonGroup/ProfileButtonGroup';
// import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileFormReadonly/getProfileReadonly';
import { getProfileInitialData } from '../../model/selectors/getProfileFormInitialData/getProfileData';

type TProfilePageHeaderProps = {
  className?: string;
}

const initialReducers: TReducers = {
  profileForm: profileFormReducer,
};

export const ProfileFormHeader = ({ className }: TProfilePageHeaderProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id : string}>();
  const authData = useSelector(getAuthData);
  const profile = useSelector(getProfileInitialData);
  const canEdit = authData?.id === profile?.id;
  const isReadonly = useSelector(getProfileReadonly);
  useDynamicModuleLoader(initialReducers);

  const onEditButtonClick = useCallback(() => {
    dispatch(profileFormActions.setReadonly(false));
  }, [dispatch]);

  const onButtonReset = useCallback(() => {
    dispatch(profileFormActions.resetProfile());
  }, [dispatch]);

  const onButtonSubmit = useCallback(() => {
    if (id) {
      // dispatch(updateProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <div className={getClassName(cls.profilePageHeader, {}, [className])}>
      {canEdit && (
        <ProfileButtonGroup
          isReadonly={isReadonly}
          onEdit={onEditButtonClick}
          onSubmit={onButtonSubmit}
          onReset={onButtonReset}
        />
      )}
    </div>
  );
};
