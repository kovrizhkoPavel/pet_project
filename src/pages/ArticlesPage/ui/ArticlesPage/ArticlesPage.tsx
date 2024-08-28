import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { PageContainer } from 'shared/ui/PageContainer/PageContainer';
import { getPageNum } from 'pages/ArticlesPage/model/selectors/getArticles';
import { InfinityScroll } from 'shared/ui/InfinityScroll/InfinityScroll';
import { useCallback, useRef } from 'react';
import {
  fetchGetArticleNextPage,
} from 'pages/ArticlesPage/model/services/fetchGetArticleNextPage/fetchGetArticleNextPage';
import { useIntersectionObserver } from 'shared/lib/hooks/useIntersectionObserver';
import { fetchGetArticleList } from '../../model/services/fetchGetArticleList/fetchGetArticleList';
import { getIsLoading, getView } from '../../model/services/selectors/getArticles';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slice/articlePageSlice';
import { PageHeader } from '../PageHeader/PageHeader';
import cls from './ArticlePage.module.scss';

const initialReducer: TReducers = {
  articles: articlePageReducer,
};

const ArticlesPage = () => {
  useDynamicModuleLoader(initialReducer);

  const articleList = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getIsLoading);
  const view = useSelector(getView);
  const dispatch = useAppDispatch();

  const onLoadNextPageNum = useCallback(() => {
    dispatch(fetchGetArticleNextPage());
  }, [dispatch, fetchGetArticleNextPage]);

  useAppUseEffect(() => {
    dispatch(articlePageActions.initViewState());
    dispatch(fetchGetArticleList());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageHeader className={cls.header} />
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
