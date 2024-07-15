import { FC } from 'react';
import { TArticleBlockCode } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlock.module.scss';

type TArticleCodeBlockProps = {
  content: TArticleBlockCode
}

export const ArticleCodeBlock: FC<TArticleCodeBlockProps> = ({ content }) => (
  <Code content={content.code} className={cls.articleCodeBlock} />
);
