import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { PageContainer } from 'shared/ui/PageContainer/PageContainer';
import { getPageNum } from 'pages/ArticlesPage/model/selectors/getArticles';
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
  const pageNum = useSelector(getPageNum);
  const dispatch = useAppDispatch();

  useAppUseEffect(() => {
    dispatch(fetchGetArticleList({ pageNum }));
    dispatch(articlePageActions.initViewState());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageHeader className={cls.header} />
      <ArticleList
        view={view}
        articles={articleList}
        isLoading={isLoading}
      />
    </PageContainer>
  );
};

export default ArticlesPage;
