import { TObjectValue } from 'shared/types/types';
import { ArticleBlockType, ArticleType } from '../../constants';

type TArticleType = TObjectValue<typeof ArticleType>;
export type TArticleBlockType = TObjectValue<typeof ArticleBlockType>;

type TArticleBase = {
  id: string;
  type: TArticleBlockType;
};

export type TArticleBlockText = TArticleBase & {
  type: 'TEXT';
  title: string;
  paragraphs: string[];
};

type TArticleBlockCode = TArticleBase & {
  type: 'CODE';
  code: string;
};

type TArticleBlockImage = TArticleBase & {
  type: 'IMAGE';
  src: string;
  title: string;
}

export type TArticleBlock = TArticleBlockText | TArticleBlockCode | TArticleBlockImage;

export type TArticle = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: TArticleType[];
  blocks: TArticleBlock[];
}
