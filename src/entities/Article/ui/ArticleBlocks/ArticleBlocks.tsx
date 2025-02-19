import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { TArticle, TArticleBlock } from '../../model/types/article';
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
      return <ArticleTextBlock content={block} key={block.id} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlock content={block} key={block.id} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlock content={block} key={block.id} />;
    default:
      return <></>;
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <Skeleton height={230} className={cls.skeleton} />
        <Skeleton height={230} className={cls.skeleton} />
        <Skeleton height={230} className={cls.skeleton} />
      </>
    );
  }

  if (!data?.blocks || !data?.blocks.length) return null;

  return data.blocks.map(renderBlock);
};
