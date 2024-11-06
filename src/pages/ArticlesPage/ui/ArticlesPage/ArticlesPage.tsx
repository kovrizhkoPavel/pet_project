import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { useSearchParams } from 'react-router-dom';
import { PageContainer } from 'widgets/PageContainer';
import { useCallback } from 'react';
import { articlesPageMainReducer } from '../../model/reducers/articlesPageMainReducer';
import { fetchGetArticleNextPage } from '../../model/services/fetchGetArticleNextPage/fetchGetArticleNextPage';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { ArticlesHeader } from '../ArticlesHeader/ArticlesHeader';
import cls from './ArticlePage.module.scss';
import { getIsLoading, getView } from '../../model/selectors/getArticles';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';

const initialReducer: TReducers = {
  articlesPage: articlesPageMainReducer,
};

const ArticlesPage = () => {
  useDynamicModuleLoader(initialReducer, false);

  const [searchParams] = useSearchParams();
  const articleList = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getIsLoading);
  const view = useSelector(getView);
  const dispatch = useAppDispatch();

  useAppUseEffect(() => {
    dispatch(initArticlePage(searchParams));
  }, [dispatch]);

  const fetchNextPage = useCallback(() => {
    dispatch(fetchGetArticleNextPage());
  }, [dispatch]);

  return (
    <PageContainer className={cls.pageContainer}>
      <ArticlesHeader />
      <ArticleList
        view={view}
        articles={articleList}
        isLoading={isLoading}
        className={cls.articleList}
        fetchNextPage={fetchNextPage}
      />
    </PageContainer>
  );
};

export default ArticlesPage;
