import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { useAppUseEffect } from '@/shared/lib/hooks/useAppUseEffect';
import { ArticleBlocks } from '../ArticleBlocks/ArticleBlocks';
import { ArticleAvatar } from '../ArticleAvatar/ArticleAvatar';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { getError } from '../../model/selectors/getArticleDetails';
import { ArticleInfo } from '../ArticleInfo/ArticleInfo';

type TArticleDetailsProps = {
  id: string;
  className?: string;
}

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className, id }) => {
  const dispatch = useAppDispatch();
  const error = useSelector(getError);

  useAppUseEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (error) {
    return <Text title={error} variant={TextVariant.ERROR} />;
  }

  return (
    <div className={className}>
      <div className={cls.avatarWrapper}>
        <ArticleAvatar />
      </div>
      <ArticleInfo />
      <ArticleBlocks />
    </div>
  );
};
