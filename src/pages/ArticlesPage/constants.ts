import { ArticlesView } from 'entities/Article/constants';

export const DEFAULT_PAGE_NUM = 1;

export const PageLimit = <const>{
  [ArticlesView.LIST]: 4,
  [ArticlesView.TILE]: 9,
};
