import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import defaultAvatar from 'shared/assets/tests/avatar.jpeg';
import { TComment } from '../../model/types/comment';
import cls from './CommentItem.module.scss';

type TCommentItemProps = {
  className?: string;
  comment?: TComment;
  isLoading?: boolean;
}

const avatarSize = 30;

export const CommentItem: FC<TCommentItemProps> = (props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={getClassName(cls.commentItem, { [cls.borderNone]: isLoading }, [])}>
        <div className={
          getClassName(cls.skeletonHeader, {}, [cls.header])
        }
        >
          <Skeleton border="50%" className={cls.avatar} width={avatarSize} height={avatarSize} />
          <Skeleton height={avatarSize} width={150} />
        </div>
        <Skeleton />
      </div>
    );
  }

  if (!comment) return null;

  const { text, user: { userName, avatar } } = comment;

  return (
    <div className={getClassName(cls.commentItem, {}, [className])}>
      <div className={cls.header}>
        <Avatar src={avatar || defaultAvatar} size={avatarSize} className={cls.avatar} />
        <Text title={userName} />
      </div>
      <Text text={text} />
    </div>
  );
};
