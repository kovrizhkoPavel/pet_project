import { FC } from 'react';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/artileCommentSlice';
import { getIsLoading } from '../../model/selectors/getArticleComments';

type TArticleCommentsProps = {
  id: string;
  className?: string;
}

export const ArticleComments: FC<TArticleCommentsProps> = ({ className, id }) => {
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
