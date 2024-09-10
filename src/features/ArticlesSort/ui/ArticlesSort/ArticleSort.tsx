import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Select, TSelectOption } from 'shared/ui/Select/Select';
import { TObjectValue, TSortOrder } from 'shared/types/types';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articleSortActions } from 'features/ArticlesSort';
import { SortField, SortOrder } from '../../constants';
import cls from './ArticleSort.module.scss';

type TSortField = TObjectValue<typeof SortField>;

type TArticleSortProps = {
  className?: string;
  onSortChange: VoidFunction;
}

export const ArticleSort: FC<TArticleSortProps> = (props) => {
  const { className, onSortChange } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const OrderOptions: TSelectOption<TSortOrder>[] = [
    {
      value: SortOrder.ASC,
      label: t('translation\:sort-asc'),
    }, {
      value: SortOrder.DESC,
      label: t('translation\:sort-desc'),
    },
  ];

  const FieldOptions: TSelectOption<TSortField>[] = [
    {
      value: SortField.CREATED,
      label: t('translation\:sort-field-created'),
    },
    {
      value: SortField.VIEWS,
      label: t('translation\:sort-field-views'),
    },
    {
      value: SortField.TITLE,
      label: t('translation\:sort-field-title'),
    },
  ];

  const onSelectOrderChange = useCallback((value:TSortOrder) => {
    dispatch(articleSortActions.setSortOrder(value));
    onSortChange();
  }, [dispatch, onSortChange]);

  const onSelectFieldChange = useCallback((value:TSortField) => {
    dispatch(articleSortActions.setSortField(value));
    onSortChange();
  }, [dispatch, onSortChange]);

  return (
    <div className={getClassName(cls.articleSort, {}, [className])}>
      <Select
        options={OrderOptions}
        onChange={onSelectOrderChange}
        label={t('translation\:sort_label')}
      />
      <Select
        options={FieldOptions}
        onChange={onSelectFieldChange}
      />
    </div>
  );
};
