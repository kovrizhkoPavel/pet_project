import { TObjectValue } from 'shared/types/types';
import { ArticleBlockType, ArticleType } from '../../constants';

type TArticleType = TObjectValue<typeof ArticleType>;
type TArticleBlockType = TObjectValue<typeof ArticleBlockType>;

type TArticleBase = {
  id: string;
  type: TArticleBlockType;
};

type TArticleBlockText = TArticleBase & {
  title: string;
  paragraphs: string[];
};

type TArticleBlockCode = TArticleBase & {
  code: string;
};

type TArticleBlockImage = TArticleBase & {
  code: string;
  src: string;
  title: string;
}

type TArticleBlock = TArticleBlockText | TArticleBlockCode | TArticleBlockImage;

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
