import { ArticlesView } from '@/entities/Article/constants';

export const DEFAULT_PAGE_NUM = 1;

export const PageLimit = <const>{
  [ArticlesView.LIST]: 10,
  [ArticlesView.TILE]: 20,
};
