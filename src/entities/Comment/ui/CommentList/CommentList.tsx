import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { TComment } from 'entities/Comment';
import { CommentItem } from 'entities/Comment/ui/CommentItem/CommentItem';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';

type TCommentListProps = {
  className?: string;
  comments: TComment[];
}

export const CommentList: FC<TCommentListProps> = ({ className, comments }) => {
  const { t } = useTranslation();

  if (comments.length === 0) {
    return <Text text={t('translation\:comments_empty')} />;
  }

  return (
    <div className={getClassName(cls.commentList, {}, [className])}>
      {comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
    </div>
  );
};
