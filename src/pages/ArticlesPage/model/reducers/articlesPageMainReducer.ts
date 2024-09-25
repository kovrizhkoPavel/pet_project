import { combineReducers } from '@reduxjs/toolkit';
import { articlesFilterReducer } from 'features/ArticlesFilter';
import { articlesSortReducer } from 'features/ArticlesSort';
import { articlesSearchReducer } from 'features/ArticlesSearch';
import { articlesPageReducer } from '../slice/articlesPageSlice';

export const articlesPageMainReducer = combineReducers({
  articles: articlesPageReducer,
  filter: articlesFilterReducer,
  sort: articlesSortReducer,
  search: articlesSearchReducer,
});
