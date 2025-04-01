import {
  ChangeEvent,
  FC,
  memo,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import cls from './Textarea.module.scss';

type TTextareaAttribute = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly'
>;
type TTextareaProps = {
  className?: string;
  value?: string;
  label?: string;
  width?: number | string;
  height?: number | string;
  isAutoFocus?: boolean;
  isError?: boolean;
  readonly?: boolean;
  direction?: 'row' | 'column';
  hint?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
} & TTextareaAttribute;

export const Textarea: FC<TTextareaProps> = memo((props) => {
  const {
    onChange,
    onFocus,
    onBlur,
    className,
    value,
    label,
    isAutoFocus,
    isError,
    readonly,
    direction,
    hint,
    ...otherProps
  } = props;

  const onTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    onChange?.(value);
  };

  const mod = {
    [cls.readonly]: !!readonly,
    [cls.error]: !!isError,
    [cls.column]: direction === 'column',
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isAutoFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isAutoFocus]);

  return (
    <div className={getClassName(cls.textarea, mod, [className])}>
      {label && <p className={cls.label}>{label}</p>}
      <div className={cls.wrapper}>
        <textarea
          onFocus={onFocus}
          onBlur={onBlur}
          ref={textareaRef}
          onChange={onTextareaChange}
          readOnly={readonly}
          value={value}
          {...otherProps}
        />
        {hint && <p className={cls.hint}>{hint}</p>}
      </div>
    </div>
  );
});
