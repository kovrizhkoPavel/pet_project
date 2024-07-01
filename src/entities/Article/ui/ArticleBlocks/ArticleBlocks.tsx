import { TArticle, TArticleBlock, TArticleBlockText } from 'entities/Article/model/types/article';
import { useSelector } from 'react-redux';
import { getData, getIsLoading } from 'entities/Article/model/selectors/getArticleDetails';
import { ArticleBlockType } from 'entities/Article/constants';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleBlocks.module.scss';

export const ArticleBlocks = () => {
  const data: TArticle | null = useSelector(getData);
  const isLoading = useSelector(getIsLoading);

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

  const renderBlock = (block: TArticleBlock) => {
    const { type } = block;

    switch (type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlock content={block as TArticleBlockText} />;
    default:
      return <></>;
    }
  };

  return data.blocks.map(renderBlock);
};
