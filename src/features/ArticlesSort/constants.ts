import { TSortOrder } from 'shared/types/types';

export const SortOrder: Record<Uppercase<TSortOrder>, TSortOrder> = <const>{
  ASC: 'asc',
  DESC: 'desc',
};

export const SortField = <const>{
  VIEWS: 'views',
  CREATED: 'created',
  TITLE: 'title',
};
