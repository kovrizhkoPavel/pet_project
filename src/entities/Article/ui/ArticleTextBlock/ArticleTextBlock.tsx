import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlock.module.scss';

type TArticleTextBlockProps = {
  className?: string;
}

export const ArticleTextBlock: FC<TArticleTextBlockProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.articleTextBlock, {}, [className])} />
  );
};
