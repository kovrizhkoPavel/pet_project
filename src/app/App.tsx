import { FC, Suspense } from 'react';
import './styles/index.scss';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { AppRouter } from 'app/providers/route';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={getClassName('app', { hovered: true }, [theme])}>
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
