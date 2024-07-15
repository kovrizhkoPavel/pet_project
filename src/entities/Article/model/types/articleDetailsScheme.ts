import { TArticle } from './article';

export type ArticleDetailsScheme = {
  isLoading: boolean;
  error?: string;
  data?: TArticle
}
