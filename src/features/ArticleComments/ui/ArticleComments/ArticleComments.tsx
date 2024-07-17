import { FC } from 'react';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { CommentItem } from 'entities/Comment/ui/CommentItem/CommentItem';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/artileCommentSlice';
import { getIsLoading } from '../../model/selectors/getArticleComments';

type TArticleCommentsProps = {
  id: string;
  className?: string;
}

const initialReducer: TReducers = {
  articleComments: articleCommentsReducer,
};

export const ArticleComments: FC<TArticleCommentsProps> = ({ className, id }) => {
  useDynamicModuleLoader(initialReducer, true);

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useAppDispatch();

  useAppUseEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <div className={className}>
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
};
