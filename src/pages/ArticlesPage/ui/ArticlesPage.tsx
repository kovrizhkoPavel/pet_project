import { ArticlesView } from 'entities/Article/constants';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { TReducers } from 'shared/types/stateScheme';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppUseEffect } from 'shared/lib/hooks/useAppUseEffect';
import { fetchGetArticleList } from '../model/services/fetchGetArticleList/fetchGetArticleList';
import { getIsLoading } from '../model/services/selectors/getArticles';
import { articlePageReducer, getArticles } from '../model/slice/articlePageSlice';

const initialReducer: TReducers = {
  articles: articlePageReducer,
};

const ArticlesPage = () => {
  useDynamicModuleLoader(initialReducer);

  const articleList = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useAppDispatch();

  useAppUseEffect(() => {
    dispatch(fetchGetArticleList());
  }, [dispatch]);

  return (
    <div>
      <ArticleList
        view={ArticlesView.LIST}
        articles={articleList}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ArticlesPage;
