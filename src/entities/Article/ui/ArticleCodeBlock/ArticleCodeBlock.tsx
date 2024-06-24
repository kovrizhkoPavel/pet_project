import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
  className?: string;
}

export const ArticleCodeBlock: FC<TArticleCodeBlockProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.articleCodeBlock, {}, [className])} />
  );
};
