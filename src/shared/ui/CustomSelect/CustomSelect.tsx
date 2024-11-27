import { getClassName } from 'shared/lib/classNames/getClassName';
import {
  Field, Label,
  Listbox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import IconArrow from 'shared/assets/icon/arrow-icon.svg';
import { CSSProperties, useCallback, useState } from 'react';
import cls from './CustomSelect.module.scss';

type TValue = string | number;

type TSelectOption<T extends TValue> = {
  label: T;
  value: T;
}

type TCustomSelectProps<T extends TValue> = {
  options: TSelectOption<T>[];
  className?: string;
  label?: string;
  // direction?: 'row' | 'column';
  width?: number;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const CustomSelect = <T extends TValue>(props: TCustomSelectProps<T>) => {
  const {
    className,
    label,
    options,
    onChange,
    readonly,
    width,
  } = props;

  const [selectedOption, setSelectedOption] = useState<T>(options[0].value);

  const disabledMod = {
    [cls.buttonDisabled]: !!readonly,
  };

  const style: CSSProperties = {
    width,
  };

  const onSelectChange = useCallback((value:T) => {
    setSelectedOption(value);
    onChange?.(value);
  }, [onChange]);

  return (
    <Field>
      {label && (
        <Label className={getClassName(cls.label, disabledMod)}>
          {label}
        </Label>
      )}
      <Listbox
        disabled={readonly}
        value={selectedOption}
        onChange={onSelectChange}
        by="value"
      >
        {({ open }) => (
          <>
            <ListboxButton
              className={getClassName(cls.button, disabledMod, [className])}
              style={style}
            >
              {selectedOption}
              <IconArrow className={getClassName(cls.icon, { [cls.iconRotate]: open })} />
            </ListboxButton>
            <ListboxOptions
              style={style}
              anchor="bottom"
              className={cls.listOptions}
            >
              {options.map(({ label, value }) => (
                <ListboxOption key={value} value={value} className={cls.option}>
                  {(p) => {
                    console.log(p);
                    return (
                      <div>{label}</div>
                    );
                  }}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </Field>

  );
};
