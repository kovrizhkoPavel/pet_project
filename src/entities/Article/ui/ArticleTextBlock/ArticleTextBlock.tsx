import { FC } from 'react';
import { Text } from '@/shared/ui/Text/Text';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { TArticleBlockText } from '../../model/types/article';
import cls from './ArticleTextBlock.module.scss';

type TArticleTextBlockProps = {
  content: TArticleBlockText;
  className?: string;
};

export const ArticleTextBlock: FC<TArticleTextBlockProps> = ({
  content,
  className,
}) => (
  <div className={getClassName(cls.articleTextBlock, {}, [className])}>
    {content.title && <Text title={content.title} />}
    {content.paragraphs.map((p) => (
      <Text key={p} text={p} />
    ))}
  </div>
);
