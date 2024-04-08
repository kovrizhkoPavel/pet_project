import {
  ChangeEvent, FC, InputHTMLAttributes, memo, useEffect, useRef,
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
  isError?: boolean;
} & TInputAttribute

export const Input: FC<TInputProps> = memo<TInputProps>((props) => {
  const {
    onChange,
    className,
    value,
    label,
    isAutoFocus,
    isError,
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
    <div className={getClassName(cls.input, { [cls.error]: isError }, [className])}>
      {label && <p className={cls.label}>{label}</p>}
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        {...otherProps}
      />
    </div>
  );
});
