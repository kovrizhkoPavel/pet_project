import {
  ChangeEvent, FC, useCallback, useMemo,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Select.module.scss';

export type TSelectOption = {
  label: string;
  value: string | number;
}

type TSelectProps = {
  className?: string;
  label?: string;
  direction?: 'row' | 'column';
  options: TSelectOption[];
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<TSelectProps> = (props) => {
  const {
    className,
    label,
    direction,
    readonly = false,
    options = [],
    onChange,
  } = props;

  const mods = {
    [cls.column]: direction === 'column',
    [cls.readonly]: readonly,
  };

  const onSelectChange = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
    const { value } = evt.target;
    onChange?.(value);
  }, [onChange]);

  const Options = useMemo(() => (options.map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))), [options]);

  return (
    <div className={getClassName(cls.selectWrapper, mods, [className])}>
      {label && <p className={cls.label}>{label}</p>}
      <select
        className={cls.select}
        onChange={onSelectChange}
        disabled={readonly}
      >
        {Options}
      </select>
    </div>
  );
};
