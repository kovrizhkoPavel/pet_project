import { FC } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { TArticleBlockText } from '../../model/types/article';
import cls from './ArticleTextBlock.module.scss';

type TArticleTextBlockProps = {
  content: TArticleBlockText;
}

export const ArticleTextBlock: FC<TArticleTextBlockProps> = ({ content }) => (
  <div className={cls.articleTextBlock}>
    {content.title && <Text title={content.title} />}
    {content.paragraphs.map((p) => <Text key={p} text={p} />)}
  </div>
);
