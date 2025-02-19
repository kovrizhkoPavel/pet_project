import { FC } from 'react';
import { Text } from '@/shared/ui/Text/Text';
import { TArticleBlockImage } from '../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

type TArticleImageBlockProps = {
  content: TArticleBlockImage;
}

export const ArticleImageBlock: FC<TArticleImageBlockProps> = ({ content }) => {
  const { title, src } = content;
  return (
    <div className={cls.articleImageBlock}>
      <img src={src} alt={title} className={cls.img} />
      {content.title && (<Text title={title} align="center" />)}
    </div>
  );
};
