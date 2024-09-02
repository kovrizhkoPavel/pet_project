import { EntityState } from '@reduxjs/toolkit';
import { TArticle, TArticlesView } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<TArticle, string> {
  error?: string;
  isLoading?: boolean;

  view: TArticlesView;
  isInitialized: boolean;

  // pagination
  pageNum: number;
  limit: number;
  hasMore: boolean;
}
