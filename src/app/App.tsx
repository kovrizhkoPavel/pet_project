import { FC, Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/route';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { userActions } from 'entities/User';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback="">
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            <Navbar />
            <div className="page-wrapper">
              <AppRouter />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
