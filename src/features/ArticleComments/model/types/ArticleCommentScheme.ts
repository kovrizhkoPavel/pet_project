import { EntityState } from '@reduxjs/toolkit';
import { TComment } from 'entities/Comment';

export interface ArticleCommentsScheme extends EntityState<TComment, string | number> {
  error?: string;
  isLoading?: boolean;
}
