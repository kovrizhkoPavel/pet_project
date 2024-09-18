import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsReducer } from 'entities/Article';
import { articleCommentsReducer } from 'features/ArticleComments';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { articleDetailsPageReducer } from '../slice/articleDetailsPageSlice';

export const articleDetailsPageMainReducer = combineReducers({
  comments: articleCommentsReducer,
  addComment: addCommentFormReducer,
  details: articleDetailsReducer,
  articlePage: articleDetailsPageReducer,
});
