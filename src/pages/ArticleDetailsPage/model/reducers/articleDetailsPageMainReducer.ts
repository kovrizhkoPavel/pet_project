import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsReducer } from 'entities/Article';
import { articleCommentsReducer } from 'features/ArticleComments';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { articlesRecommendationsReducer } from 'features/ArticlesRecommendations';
import { articleDetailsPageReducer } from '../slice/articleDetailsPageSlice';

export const articleDetailsPageMainReducer = combineReducers({
  articlePage: articleDetailsPageReducer,
  comments: articleCommentsReducer,
  addComment: addCommentFormReducer,
  details: articleDetailsReducer,
  recommendations: articlesRecommendationsReducer,
});
