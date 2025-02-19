import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { TArticlesView } from '../../../model/types/article';
import { ArticlesView } from '../../../constants';
import { SkeletonCard } from '../CardBig/SkeletonCard';
import cls from './SkeletonList.module.scss';

const TILE_COUNT = 20;
const LIST_COUNT = 3;

type TSkeletonList = {
  view: TArticlesView;
  className?: string;
};

export const SkeletonList = ({ view, className }: TSkeletonList) => {
  if (view === ArticlesView.TILE) {
    return (
      <div className={getClassName(cls.skeletonList, {}, [className])}>
        {
          new Array(TILE_COUNT)
            .fill('')
            .map((_, i) => (
              <Skeleton
                className={cls.skeleton}
                key={i}
                width={210}
                height={230}
              />
            ))
        }
      </div>
    );
  }

  return (
    <>
      {
        new Array(LIST_COUNT)
          .fill('')
          .map((_, i) => (
            <SkeletonCard
              className={getClassName(cls.skeletonCard, {}, [className])}
              key={i}
            />
          ))
      }
    </>
  );
};
