import { FC } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { TProfile } from '../../types/profile';

type TProfileCardProps = {
  className?: string;
  data?: TProfile;
}

export const ProfileCard: FC<TProfileCardProps> = (props) => {
  const { data, className } = props;
  const { t } = useTranslation();

  return (
    <div className={className}>
      <p>
        <span>{`${t('translation\:profile_firstname')}: `}</span>
        <span>{data?.firstname}</span>
      </p>
      <p>
        <span>{`${t('translation\:profile_lastname')}: `}</span>
        <span>{data?.lastname}</span>
      </p>
      <Button variant={ButtonVariant.FILL}>
        {t('translation\:profile_edit_btn')}
      </Button>
    </div>
  );
};
