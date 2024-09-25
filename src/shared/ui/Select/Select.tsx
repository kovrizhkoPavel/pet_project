import { ChangeEvent, useCallback, useMemo } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Select.module.scss';

type TSelectValue = string | number;

export type TSelectOption<T extends TSelectValue> = {
  label: string;
  value: T;
}

type TSelectProps<T extends TSelectValue> = {
  className?: string;
  label?: string;
  direction?: 'row' | 'column';
  options: TSelectOption<T>[];
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const Select = <T extends TSelectValue>(props: TSelectProps<T>) => {
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
    onChange?.(value as T);
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
