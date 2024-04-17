import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Input } from 'shared/ui/Input/Input';
import { TProfile } from '../../types/profile';
import cls from './ProfileCard.module.scss';

type TProfileCardProps = {
  className?: string;
  data?: TProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
}

export const ProfileCard: FC<TProfileCardProps> = (props) => {
  const { t } = useTranslation();
  const {
    data, className, isLoading, error, readonly,
  } = props;

  if (isLoading) {
    return (
      <div className={getClassName(cls.profilePage, {}, [cls.loading])}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={getClassName(cls.profilePage, {}, [className])}>
      <Input
        label={`${t('translation\:profile_firstname')}: `}
        value={data?.firstname || ''}
        className={cls.input}
        readonly={!!readonly}
      />
      <Input
        label={`${t('translation\:profile_lastname')}: `}
        value={data?.lastname || ''}
        readonly={!!readonly}
      />
    </div>
  );
};
