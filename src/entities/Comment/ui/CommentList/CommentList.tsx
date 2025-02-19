import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { CommentItem } from '../CommentItem/CommentItem';
import { TComment } from '../../model/types/comment';

type TCommentListProps = {
  className?: string;
  isLoading?: boolean;
  comments: TComment[];
}

export const CommentList: FC<TCommentListProps> = (props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (comments.length === 0 && !isLoading) {
    return <Text text={t('translation\:comments_empty')} />;
  }

  if (isLoading) {
    return (
      <>
        <CommentItem isLoading />
        <CommentItem isLoading />
        <CommentItem isLoading />
      </>
    );
  }

  return (
    <div className={className}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isLoading={!!isLoading}
        />
      ))}
    </div>
  );
};
