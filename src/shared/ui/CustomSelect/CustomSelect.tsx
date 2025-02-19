import {
  Field, Label,
  Listbox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { CSSProperties, useCallback, useState } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import IconArrow from '@/shared/assets/icon/arrow-icon.svg';
import cls from './CustomSelect.module.scss';

type TValue = string | number;

export type TSelectOption<T extends TValue> = {
  label: T;
  value: T;
}

type TCustomSelectProps<T extends TValue> = {
  options: TSelectOption<T>[];
  className?: string;
  label?: string;
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

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const disabledMod = {
    [cls.buttonDisabled]: !!readonly,
  };

  const style: CSSProperties = {
    width,
  };

  const onSelectChange = useCallback((selectedOption:TSelectOption<T>) => {
    setSelectedOption(selectedOption);
    onChange?.(selectedOption.value);
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
      >
        {({ open }) => (
          <>
            <ListboxButton
              className={getClassName(cls.button, disabledMod, [className])}
              style={style}
            >
              {selectedOption.label}
              <IconArrow className={getClassName(cls.icon, { [cls.iconRotate]: open })} />
            </ListboxButton>
            <ListboxOptions
              style={style}
              anchor="bottom"
              className={cls.listOptions}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option}
                  className={
                    getClassName(
                      cls.option,
                      { [cls.selected]: option.value === selectedOption.value },
                    )
                  }
                >
                  {option.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </Field>

  );
};
