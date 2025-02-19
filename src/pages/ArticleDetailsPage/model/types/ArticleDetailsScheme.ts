import { ArticleDetailsScheme } from '@/entities/Article';
import { ArticleCommentsScheme } from '@/features/ArticleComments';
import { AddCommentFormScheme } from '@/features/AddCommentForm';
import { ArticlesRecommendationsScheme } from '@/features/ArticlesRecommendations';

export type ArticlePageScheme = {
  _isInit: boolean;
}

export type ArticleDetailsPageScheme = {
  articlePage: ArticlePageScheme;
  comments: ArticleCommentsScheme;
  addComment: AddCommentFormScheme;
  details: ArticleDetailsScheme;
  recommendations: ArticlesRecommendationsScheme
}
