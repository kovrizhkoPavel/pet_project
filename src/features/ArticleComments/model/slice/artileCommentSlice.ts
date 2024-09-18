import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TComment } from 'entities/Comment';
import { StateScheme } from 'shared/types/stateScheme';
import { ArticleCommentsScheme } from '../types/ArticleCommentScheme';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const articleCommentsAdapter = createEntityAdapter({
  selectId: (comment: TComment) => comment.id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateScheme>(
  (state) => state.articleDetailsPage?.comments || articleCommentsAdapter.getInitialState(),
);

const initialState: ArticleCommentsScheme = articleCommentsAdapter
  .getInitialState<ArticleCommentsScheme>({
    ids: [],
    entities: {},
    isLoading: false,
    error: '',
  });

const articleCommentSlice = createSlice({
  name: 'articleCommentSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleCommentsActions } = articleCommentSlice;
export const { reducer: articleCommentsReducer } = articleCommentSlice;
