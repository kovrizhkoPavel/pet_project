import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '@/shared/constants/common';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';

type TCountrySelectProps = {
  className?: string;
  readonly?: boolean;
  onChange?: (val: string) => void;
}

const options = Object.entries(Country).map(([value, label]) => ({
  value,
  label,
}));

export const CountrySelect: FC<TCountrySelectProps> = (props) => {
  const { className, onChange, readonly = false } = props;
  const { t } = useTranslation();

  return (
    <CustomSelect
      readonly={readonly}
      width={160}
      options={options}
      className={className}
      onChange={onChange}
      label={t('translation\:profile_country')}
    />
  );
};
