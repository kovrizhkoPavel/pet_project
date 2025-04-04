import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon';
import TileIcon from '@/shared/assets/icon/tile-icon.svg';
import ListIcon from '@/shared/assets/icon/burger-menu.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { TArticlesView } from '@/entities/Article/model/types/article';
import { ArticlesView } from '@/entities/Article/constants';
import { ArticleSort } from '@/features/ArticlesSort';
import { ArticlesSearch } from '@/features/ArticlesSearch';
import { ArticlesFilter } from '@/features/ArticlesFilter';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import cls from './PageHeader.module.scss';
import { getView } from '../../model/selectors/getArticles';
import { fetchGetArticleList } from '../../model/services/fetchGetArticleList/fetchGetArticleList';

type TArticlesHeaderProps = {
  className?: string;
};

export const ArticlesHeader: FC<TArticlesHeaderProps> = memo(
  ({ className }) => {
    const dispatch = useAppDispatch();
    const view = useSelector(getView);

    const onClick = (value: TArticlesView) => () => {
      dispatch(articlesPageActions.setView(value));
    };

    const onFiltersChange = () => {
      dispatch(articlesPageActions.resetPageNum());
      dispatch(fetchGetArticleList({ replace: true }));
    };

    return (
      <div className={getClassName(cls.articleHeader, {}, [className])}>
        <div className={cls.container}>
          <ArticleSort onSortChange={onFiltersChange} />
          <div className={cls.viewButtons}>
            <ButtonIcon
              className={cls.button}
              iconClassName={getClassName(cls.icon, {
                [cls.active]: view === ArticlesView.TILE,
              })}
              onClick={onClick(ArticlesView.TILE)}
              Icon={TileIcon}
            />
            <ButtonIcon
              className={cls.button}
              iconClassName={getClassName(
                cls.icon,
                { [cls.active]: view === ArticlesView.LIST },
                [cls.iconList],
              )}
              onClick={onClick(ArticlesView.LIST)}
              Icon={ListIcon}
            />
          </div>
        </div>
        <ArticlesSearch onChange={onFiltersChange} />
        <ArticlesFilter onChange={onFiltersChange} />
      </div>
    );
  },
);
