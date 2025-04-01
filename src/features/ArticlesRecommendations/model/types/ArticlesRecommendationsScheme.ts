import { TArticle } from '@/entities/Article/model/types/article';

export type ArticlesRecommendationsScheme = {
  articles: TArticle[];
  isLoading?: boolean;
  error?: string;
};
