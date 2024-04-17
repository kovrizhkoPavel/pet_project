import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Input.module.scss';

type TInputAttribute = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
type TInputProps = {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
  isAutoFocus?: boolean;
  isError?: boolean;
  readonly?: boolean;
  direction?: 'row' | 'column';
} & TInputAttribute

export const Input: FC<TInputProps> = memo<TInputProps>((props) => {
  const {
    onChange,
    className,
    value,
    label,
    isAutoFocus,
    isError,
    readonly,
    direction,
    ...otherProps
  } = props;

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    onChange?.(value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  const mod = {
    [cls.readonly]: !!readonly,
    [cls.error]: !!isError,
    [cls.column]: direction === 'column',
  };

  useEffect(() => {
    if (isAutoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAutoFocus]);

  return (
    <div className={
      getClassName(cls.input, mod, [className])
    }
    >
      {label && <p className={cls.label}>{label}</p>}
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
