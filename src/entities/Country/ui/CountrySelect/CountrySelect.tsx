import { FC } from 'react';
import { Select, TSelectOption } from 'shared/ui/Select/Select';
import { Country } from 'shared/constants/common';
import { useTranslation } from 'react-i18next';

type TCountrySelectProps = {
  className?: string;
  readonly?: boolean;
  onChange?: (val: string) => void;
}

const options: TSelectOption[] = Object.entries(Country).map(([value, label]) => ({
  value,
  label,
}));

export const CountrySelect: FC<TCountrySelectProps> = (props) => {
  const { className, onChange, readonly = false } = props;
  const { t } = useTranslation();

  return (
    <Select
      className={className}
      options={options}
      onChange={onChange}
      readonly={readonly}
      label={t('translation\:profile_country')}
    />
  );
};
