import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ArticleUrl } from 'shared/constants/api';
import { TComment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';
import { addCommentFormActions, getAddFormCommentText } from 'features/AddCommentForm';
import { fetchCommentsByArticleId } from 'features/ArticleComments';

export const fetchAddArticleComment = createAsyncThunk<TComment, void, TThunkApiConfig<string>>(
  'articleDetails/addCommentForm',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue, dispatch, getState,
    } = thunkAPI;

    const userData = getAuthData(getState());
    const article = getArticleDetailsData(getState());
    const text = getAddFormCommentText(getState());

    if (!userData || !article || !text) {
      return rejectWithValue('error');
    }

    dispatch(addCommentFormActions.setIsLoading(true));

    try {
      const { data } = await extra.api.post<TComment>(ArticleUrl.COMMENTS, {
        articleId: article.id,
        userId: userData.id,
        text,
      });

      if (!data) {
        return rejectWithValue('error');
      }

      dispatch(fetchCommentsByArticleId(article.id));
      dispatch(addCommentFormActions.reset());

      return data;
    } catch (err) {
      return rejectWithValue('error');
    } finally {
      dispatch(addCommentFormActions.setIsLoading(false));
    }
  },
);
