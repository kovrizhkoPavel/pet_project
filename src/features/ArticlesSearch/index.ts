export {
  articlesSearchActions,
  articlesSearchReducer,
} from './model/slice/ArticlesSearchSlice';
export { ArticlesSearch } from './ui/ArticlesSearch/ArticlesSearch';
export { getSearchValue as getArticlesSearchValue } from './model/selectors/getArticlesSearch';
export type { ArticlesSearchScheme } from './model/types/ArticlesSearchScheme';
