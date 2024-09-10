import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Select, TSelectOption } from 'shared/ui/Select/Select';
import { SortField, SortOrder } from '../../constants';
import cls from './ArticleSort.module.scss';

type TArticleSortProps = {
  className?: string;
}

export const ArticleSort: FC<TArticleSortProps> = ({ className }) => {
  const { t } = useTranslation();

  const OrderOptions: TSelectOption[] = [
    {
      value: SortOrder.ASC,
      label: t('translation\:sort-asc'),
    }, {
      value: SortOrder.DESC,
      label: t('translation\:sort-desc'),
    },
  ];

  const FieldOptions: TSelectOption[] = [
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

  return (
    <div className={getClassName(cls.articleSort, {}, [className])}>
      <Select options={OrderOptions} label={t('translation\:sort_label')} />
      <Select options={FieldOptions} />
    </div>
  );
};
