import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlock.module.scss';

type TArticleImageBlockProps = {
  className?: string;
}

export const ArticleImageBlock: FC<TArticleImageBlockProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.articleImageBlock, {}, [className])} />
  );
};
