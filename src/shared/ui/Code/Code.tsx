import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import CopyIcon from 'shared/assets/icon/copy-icon.svg';
import { Button } from '../Button/Button';
import cls from './Code.module.scss';

type TCodeProps = {
  className?: string;
  content: string
}

export const Code: FC<TCodeProps> = (props) => {
  const { className, content } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(content);
  }, [content]);

  return (
    <pre className={getClassName(cls.code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyButton}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{content}</code>
    </pre>
  );
};
