import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { PageContainer } from 'widgets/PageContainer';
import { InfinityScroll } from 'shared/ui/InfinityScroll/InfinityScroll';
import { useCallback } from 'react';
import { articlesSearchReducer } from 'features/ArticlesSearch';
import { articlesSortReducer } from 'features/ArticlesSort';
import { articlesFilterReducer } from 'features/ArticlesFilter';
import { fetchGetArticleNextPage } from '../../model/services/fetchGetArticleNextPage/fetchGetArticleNextPage';
import { articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { ArticlesHeader } from '../ArticlesHeader/ArticlesHeader';
import cls from './ArticlePage.module.scss';
import { getIsLoading, getView } from '../../model/selectors/getArticles';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';

const initialReducer: TReducers = {
  articles: articlePageReducer,
  articlesSort: articlesSortReducer,
  articlesSearch: articlesSearchReducer,
  articlesFilter: articlesFilterReducer,
};

const ArticlesPage = () => {
  useDynamicModuleLoader(initialReducer, false);

  const articleList = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getIsLoading);
  const view = useSelector(getView);
  const dispatch = useAppDispatch();

  const onLoadNextPageNum = useCallback(() => {
    dispatch(fetchGetArticleNextPage());
  }, [dispatch]);

  useAppUseEffect(() => {
    dispatch(initArticlePage());
  }, [dispatch]);

  return (
    <PageContainer>
      <ArticlesHeader className={cls.header} />
      <InfinityScroll cb={onLoadNextPageNum}>
        <ArticleList
          view={view}
          articles={articleList}
          isLoading={isLoading}
        />
      </InfinityScroll>
    </PageContainer>
  );
};

export default ArticlesPage;
