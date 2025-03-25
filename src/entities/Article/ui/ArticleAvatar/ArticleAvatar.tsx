import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getData, getIsLoading } from '../../model/selectors/getArticleDetails';
import { TArticle } from '../../model/types/article';
import cls from './ArticleAvatar.module.scss';

const AVATAR_SIZE = 200;

export const ArticleAvatar = memo(() => {
  const isLoading = useSelector(getIsLoading);
  const data: TArticle | null = useSelector(getData);

  return isLoading ? (
    <Skeleton
      width={AVATAR_SIZE}
      height={AVATAR_SIZE}
      border="50%"
      className={cls.skeleton}
    />
  ) : (
    <Avatar src={`${data?.img}`} alt="article avatar" size={200} />
  );
});
