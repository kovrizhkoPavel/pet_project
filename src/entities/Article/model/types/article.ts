import { TObjectValue } from 'shared/types/utils';
import { TUser } from 'entities/User';
import { ArticleBlockType, ArticlesView, ArticleType } from '../../constants';

type TArticleType = TObjectValue<typeof ArticleType>;
export type TArticlesView = TObjectValue<typeof ArticlesView>;
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

export type TArticleBlockCode = TArticleBase & {
  type: 'CODE';
  code: string;
};

export type TArticleBlockImage = TArticleBase & {
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
  user: TUser;
  type: TArticleType[];
  blocks: TArticleBlock[];
}
