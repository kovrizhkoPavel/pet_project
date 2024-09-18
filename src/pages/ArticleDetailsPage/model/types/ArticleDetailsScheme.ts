import { ArticleDetailsScheme } from 'entities/Article';
import { ArticleCommentsScheme } from 'features/ArticleComments';
import { AddCommentFormScheme } from 'features/AddCommentForm';

export type ArticlePageScheme = {
  _isInit: boolean;
}

export type ArticleDetailsPageScheme = {
  comments: ArticleCommentsScheme;
  addComment: AddCommentFormScheme;
  details: ArticleDetailsScheme;
  articlePage: ArticlePageScheme;
}
