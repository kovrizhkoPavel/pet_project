import { TArticle, TArticleBlock } from 'entities/Article/model/types/article';
import { useSelector } from 'react-redux';
import { getData, getIsLoading } from 'entities/Article/model/selectors/getArticleDetails';
import { ArticleBlockType } from 'entities/Article/constants';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useCallback } from 'react';
import cls from './ArticleBlocks.module.scss';

export const ArticleBlocks = () => {
  const data: TArticle | null = useSelector(getData);
  const isLoading = useSelector(getIsLoading);
  const renderBlock = useCallback((block: TArticleBlock) => {
    const { type } = block;

    switch (type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlock content={block} />;
    case ArticleBlockType.CODE:
      return <></>;
    case ArticleBlockType.IMAGE:
      return <></>;
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
