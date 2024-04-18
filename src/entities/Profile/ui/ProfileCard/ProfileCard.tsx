import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Input } from 'shared/ui/Input/Input';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { CountrySelect } from 'entities/Country';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { TProfile } from '../../types/profile';
import cls from './ProfileCard.module.scss';

type TProfileCardProps = {
  className?: string;
  data?: TProfile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onFirstNameChange?: (val:string) => void;
  onLastNameChange?: (val:string) => void;
  onCityChange?: (val:string) => void;
  onAgeChange?: (val:string) => void;
  onAvatarChange?: (val:string) => void;
  onCurrencyChange?: (val:string) => void;
  onCountryChange?: (val:string) => void;
}

export const ProfileCard: FC<TProfileCardProps> = (props) => {
  const { t } = useTranslation();
  const {
    data,
    className,
    isLoading,
    error,
    readonly,
    onLastNameChange,
    onFirstNameChange,
    onAgeChange,
    onCityChange,
    onAvatarChange,
    onCountryChange,
    onCurrencyChange,
  } = props;

  if (isLoading) {
    return (
      <div className={getClassName(cls.profilePage, {}, [cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={getClassName(cls.profilePage, {}, [cls.error])}>
        <Text
          title={t('translation\:title_error')}
          text={t('translation\:title_error')}
          variant={TextVariant.ERROR}
          align="center"
        />
      </div>
    );
  }

  return (
    <div className={getClassName(cls.profilePage, {}, [className])}>
      {data?.avatar && (
        <div className={cls.avatar}>
          <Avatar src={data.avatar} />
        </div>
      )}
      <Input
        label={`${t('translation\:profile_firstname')}: `}
        value={data?.firstname || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onFirstNameChange}
      />
      <Input
        label={`${t('translation\:profile_lastname')}: `}
        value={data?.lastname || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onLastNameChange}
      />
      <Input
        label={`${t('translation\:profile_age')}: `}
        value={Number(data?.age) || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onAgeChange}
      />
      <Input
        label={`${t('translation\:profile_city')}: `}
        value={data?.city || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onCityChange}
      />
      <Input
        label={`${t('translation\:profile_avatar')}: `}
        value={data?.avatar || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onAvatarChange}
      />
      <CurrencySelect
        className={cls.input}
        onChange={onCurrencyChange}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        onChange={onCountryChange}
        readonly={readonly}
      />
    </div>
  );
};
