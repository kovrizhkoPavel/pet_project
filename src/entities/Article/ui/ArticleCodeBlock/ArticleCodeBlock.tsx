import { FC } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { TArticleBlockCode } from '../../model/types/article';
import cls from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
  content: TArticleBlockCode
}

export const ArticleCodeBlock: FC<TArticleCodeBlockProps> = ({ content }) => (
  <Code content={content.code} className={cls.articleCodeBlock} />
);
