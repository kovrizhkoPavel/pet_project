import { FC } from 'react';
import { Select, TSelectOption } from 'shared/ui/Select/Select';
import { Currency } from 'shared/constants/common';
import { useTranslation } from 'react-i18next';

type TCurrencySelectProps = {
  className?: string;
  readonly?: boolean;
  onChange?: (val: string) => void;
}

const options: TSelectOption<string>[] = Object.entries(Currency).map(([value, label]) => ({
  value,
  label,
}));

export const CurrencySelect: FC<TCurrencySelectProps> = (props) => {
  const { className, onChange, readonly = false } = props;
  const { t } = useTranslation();

  return (
    <Select
      className={className}
      options={options}
      onChange={onChange}
      readonly={readonly}
      label={t('translation\:profile_currency')}
    />
  );
};
