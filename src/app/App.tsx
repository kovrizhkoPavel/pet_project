import { FC, Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/route';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { userActions } from '@/entities/User';
import { getIsInit } from '@/entities/User/model/selectors/getIsInit/getIsInit';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInit = useSelector(getIsInit);

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
            {isInit && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
