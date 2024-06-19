import { TArticle } from './article';

export type ArticleDetailsSchema = {
  isLoading: boolean;
  error?: string;
  data?: TArticle
}
