import { FC } from 'react';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { ArticleBlocks } from 'entities/Article/ui/ArticleBlocks/ArticleBlocks';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { ArticleComments } from 'features/ArticleComments';
import { AddCommentForm } from 'features/AddCommentForm';
import { ArticleAvatar } from '../ArticleAvatar/ArticleAvatar';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { getError } from '../../model/selectors/getArticleDetails';
import { ArticleInfo } from '../ArticleInfo/ArticleInfo';

type TArticleDetailsProps = {
  id: string;
  className?: string;
}

const initialReducer: TReducers = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<TArticleDetailsProps> = ({ className, id }) => {
  const dispatch = useAppDispatch();
  const error = useSelector(getError);

  useDynamicModuleLoader(initialReducer);

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
      <AddCommentForm />
      <ArticleComments id={id} />
    </div>
  );
};
