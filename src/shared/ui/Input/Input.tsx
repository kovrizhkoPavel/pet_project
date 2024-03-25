import {
  ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Input.module.scss';

type TInputAttribute = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
type TInputProps = {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
  isAutoFocus?: boolean;
} & TInputAttribute

export const Input: FC<TInputProps> = (props) => {
  const {
    onChange,
    className,
    value,
    label,
    isAutoFocus,
    ...otherProps
  } = props;

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    onChange?.(value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isAutoFocus) {
      inputRef.current.focus();
    }
  }, [isAutoFocus]);

  return (
    <div className={getClassName(cls.input, {}, [className])}>
      {label && <p className={cls.label}>{label}</p>}
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        {...otherProps}
      />
    </div>
  );
};
