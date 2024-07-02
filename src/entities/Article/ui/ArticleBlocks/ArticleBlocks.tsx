import { TArticle, TArticleBlock } from 'entities/Article/model/types/article';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';
import { getData, getIsLoading } from '../../model/selectors/getArticleDetails';
import { ArticleBlockType } from '../../constants';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import cls from './ArticleBlocks.module.scss';

export const ArticleBlocks = () => {
  const data: TArticle | null = useSelector(getData);
  const isLoading = useSelector(getIsLoading);
  const renderBlock = useCallback((block: TArticleBlock) => {
    const { type } = block;

    switch (type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlock content={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlock content={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlock content={block} />;
    default:
      return <></>;
    }
  }, []);

  if (!data?.blocks || !data?.blocks.length) return null;

  if (isLoading) {
    return (
      <>
        <Skeleton height={230} className={cls.skeleton} />
        <Skeleton height={230} className={cls.skeleton} />
        <Skeleton height={230} className={cls.skeleton} />
      </>
    );
  }

  return data.blocks.map(renderBlock);
};
