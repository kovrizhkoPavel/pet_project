import { EntityState } from '@reduxjs/toolkit';
import {
  TArticle,
  TArticlesView,
} from '@/entities/Article/model/types/article';
import { ArticlesSortScheme } from '@/features/ArticlesSort';
import { ArticlesFilterScheme } from '@/features/ArticlesFilter';
import { ArticlesSearchScheme } from '@/features/ArticlesSearch';

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

export type ArticlesMainScheme = {
  articles: ArticlesPageSchema;
  sort: ArticlesSortScheme;
  filter: ArticlesFilterScheme;
  search: ArticlesSearchScheme;
};

export type TQuerySearchKeys = 'page' | 'sort' | 'order' | 'type' | 'search';
