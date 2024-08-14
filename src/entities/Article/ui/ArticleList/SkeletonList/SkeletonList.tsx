import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { TArticlesView } from 'entities/Article/model/types/article';
import { ArticlesView } from 'entities/Article/constants';
import cls from './SkeletonList.module.scss';

const TILE_COUNT = 7;

export const SkeletonList = ({ view }: {view: TArticlesView}) => {
  if (view === ArticlesView.TILE) {
    return (
      <div className={cls.skeletonList}>
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

  return <></>;
};
