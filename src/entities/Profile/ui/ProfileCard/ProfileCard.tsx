import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/shared/ui/Loader/Loader';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Input } from '@/shared/ui/Input/Input';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import { ValidatorError } from '../../constants';
import { CurrencySelect } from '../../../Currency';
import { CountrySelect } from '../../../Country';
import { TProfile, TProfileValidationError } from '../../types/profile';
import cls from './ProfileCard.module.scss';

type TProfileCardProps = {
  className?: string;
  data?: TProfile;
  isLoading?: boolean;
  error?: boolean;
  readonly?: boolean;
  validationError?: TProfileValidationError;
  onFirstNameChange?: (val: string) => void;
  onLastNameChange?: (val: string) => void;
  onCityChange?: (val: string) => void;
  onAgeChange?: (val: string) => void;
  onAvatarChange?: (val: string) => void;
  onCurrencyChange?: (val: string) => void;
  onCountryChange?: (val: string) => void;
};

export const ProfileCard: FC<TProfileCardProps> = (props) => {
  const { t } = useTranslation();
  const {
    data,
    className,
    isLoading,
    error,
    readonly,
    validationError,
    onLastNameChange,
    onFirstNameChange,
    onAgeChange,
    onCityChange,
    onAvatarChange,
    onCountryChange,
    onCurrencyChange,
  } = props;

  const validateErrorTranslates = {
    [ValidatorError.REQUIRED]: t('translation\:profile_required'),
    [ValidatorError.ONLY_INTEGER]: t('translation\:profile_only_integer'),
  };

  if (isLoading) {
    return (
      <HStack
        align="center"
        justify="center"
        className={getClassName(cls.loading, {}, [cls.profilePage])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        align="center"
        justify="center"
        className={getClassName(cls.error, {}, [cls.profilePage])}
      >
        <Text
          title={t('translation\:title_error')}
          text={t('translation\:title_error')}
          variant={TextVariant.ERROR}
          align="center"
        />
      </HStack>
    );
  }

  return (
    <div className={getClassName(cls.profilePage, {}, [className])}>
      {data?.avatar && (
        <HStack className={cls.avatar} align="center" justify="center">
          <Avatar src={data.avatar} />
        </HStack>
      )}
      <Input
        data-testid="edit-profile-form-firstname-input"
        label={`${t('translation\:profile_firstname')}: `}
        value={data?.firstname || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onFirstNameChange}
        isError={!!validationError?.firstname}
        hint={
          validationError?.firstname &&
          validateErrorTranslates[validationError.firstname]
        }
      />
      <Input
        label={`${t('translation\:profile_lastname')}: `}
        value={data?.lastname || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onLastNameChange}
        isError={!!validationError?.lastname}
        hint={
          validationError?.lastname &&
          validateErrorTranslates[validationError.lastname]
        }
      />
      <Input
        label={`${t('translation\:profile_age')}: `}
        value={Number(data?.age) || ''}
        className={cls.input}
        readonly={!!readonly}
        onChange={onAgeChange}
        isError={!!validationError?.age}
        hint={
          validationError?.age && validateErrorTranslates[validationError.age]
        }
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
        className={cls.select}
        onChange={onCurrencyChange}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.select}
        onChange={onCountryChange}
        readonly={readonly}
      />
    </div>
  );
};
