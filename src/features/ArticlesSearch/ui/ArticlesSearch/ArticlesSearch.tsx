import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articlesSearchActions } from '../../model/slice/ArticlesSearchSlice';
import cls from './ArticlesSearch.module.scss';

type TArticlesSearchProps = {
  className?: string;
  onChange: VoidFunction;
}

export const ArticlesSearch: FC<TArticlesSearchProps> = ({ className, onChange }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onSearchChange = useCallback((value: string) => {
    dispatch(articlesSearchActions.setSearch(value));
    onChange();
  }, [dispatch, onChange]);

  return (
    <div className={getClassName(cls.articlesSearch, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('translation\:article_search')}
        onChange={onSearchChange}
      />
    </div>
  );
};
