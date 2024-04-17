import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { profileActions } from 'pages/ProfilePage/model/slice/profileSlice';
import { useSelector } from 'react-redux';
import { ProfileButtonGroup } from 'pages/ProfilePage/ui/ProfileButtonGroup/ProfileButtonGroup';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import cls from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
  className?: string;
}

export const ProfilePageHeader: FC<TProfilePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isReadonly = useSelector(getProfileReadonly);

  const onEditButtonClick = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onButtonReset = useCallback(() => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.resetProfile());
  }, [dispatch]);

  const onButtonSubmit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, []);

  return (
    <div className={getClassName(cls.profilePageHeader, {}, [className])}>
      <h1>{t('translation\:title_profile')}</h1>
      {isReadonly ? (
        <Button
          variant={ButtonVariant.FILL}
          onClick={onEditButtonClick}
        >
          {t('translation\:profile_edit_btn')}
        </Button>
      ) : <ProfileButtonGroup onSubmit={onButtonSubmit} onReset={onButtonReset} />}
    </div>
  );
};
