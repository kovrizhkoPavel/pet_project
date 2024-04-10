import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useSelector } from 'react-redux';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

type TProfileCardProps = {
  className?: string;
}

export const ProfileCard: FC<TProfileCardProps> = ({ className }) => {
  const profileData = useSelector(getProfileData);
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.profileCard, {}, [className])}>
      <p>
        <span>{`${t('translation\:profile_firstname')}: `}</span>
        <span>{profileData?.firstname}</span>
      </p>
      <p>
        <span>{`${t('translation\:profile_lastname')}: `}</span>
        <span>{profileData?.lastname}</span>
      </p>
      <Button variant={ButtonVariant.FILL}>
        {t('translation\:profile_edit_btn')}
      </Button>
    </div>
  );
};
