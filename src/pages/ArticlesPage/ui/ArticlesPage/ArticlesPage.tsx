import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { useSearchParams } from 'react-router-dom';
import { PageContainer } from 'widgets/PageContainer';
import { InfinityScroll } from 'shared/ui/InfinityScroll/InfinityScroll';
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

  const onLoadNextPageNum = useCallback(() => {
    dispatch(fetchGetArticleNextPage());
  }, [dispatch]);

  useAppUseEffect(() => {
    dispatch(initArticlePage(searchParams));
  }, [dispatch]);

  return (
    <PageContainer className={cls.pageContainer}>
      <ArticlesHeader />
      {/* <InfinityScroll cb={onLoadNextPageNum}> */}
      <ArticleList
        view={view}
        articles={articleList}
        isLoading={isLoading}
        className={cls.articleList}
      />
      {/* </InfinityScroll> */}
    </PageContainer>
  );
};

export default ArticlesPage;
