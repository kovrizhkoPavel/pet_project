import { TSortOrder } from 'shared/types/types';
import { TSelectOption } from 'shared/ui/Select/Select';
import { i18t } from 'shared/lib/i18t/i18t';

export const SortOrder: Record<Uppercase<TSortOrder>, TSortOrder> = <const>{
  ASC: 'asc',
  DESC: 'desc',
};

export const SortField = {
  VIEWS: 'views',
  CREATED: 'created',
  TITLE: 'title',
};

export const OrderOptions: TSelectOption[] = [
  {
    value: SortOrder.ASC,
    label: i18t('translation\:sort-asc'),
  }, {
    value: SortOrder.DESC,
    label: i18t('translation\:sort-desc'),
  },
];

export const SortFieldOptions: TSelectOption[] = [
  {
    value: SortField.CREATED,
    label: '1',
  },
  {
    value: SortField.VIEWS,
    label: '2',
  },
  {
    value: SortField.TITLE,
    label: '3',
  },
];
