import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { useParams } from 'react-router-dom';
import { profileActions } from '../../model/slice/profileSlice';
import { ProfileButtonGroup } from '../ProfileButtonGroup/ProfileButtonGroup';
import { updateProfileData } from '../../model/service/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import cls from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
  className?: string;
}

export const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { id } = useParams<{id : string}>();
  const authData = useSelector(getAuthData);
  const profile = useSelector(getProfileData);
  const canEdit = authData?.id === profile?.id;
  const isReadonly = useSelector(getProfileReadonly);

  const onEditButtonClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onButtonReset = useCallback(() => {
    dispatch(profileActions.resetProfile());
  }, [dispatch]);

  const onButtonSubmit = useCallback(() => {
    if (id) {
      dispatch(updateProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <div className={getClassName(cls.profilePageHeader, {}, [className])}>
      <h1>{t('translation\:title_profile')}</h1>
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
