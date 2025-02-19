import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from '@/shared/lib/hooks/useAppUseEffect';
import { Text } from '@/shared/ui/Text/Text';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/artileCommentSlice';
import { getIsLoading } from '../../model/selectors/getArticleComments';
import cls from './ArticleComments.module.scss';

type TArticleCommentsProps = {
  id: string;
  className?: string;
}

export const ArticleComments: FC<TArticleCommentsProps> = ({ className, id }) => {
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useAppDispatch();

  useAppUseEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <div className={className}>
      <Text
        size="L"
        className={cls.commentTitle}
        text={t('translation\:article_comments_title')}
      />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
};
