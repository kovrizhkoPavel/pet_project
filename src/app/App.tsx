import { FC, Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { AppRouter } from 'app/providers/route';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={getClassName('app', { hovered: true }, [theme, 'cls2'])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
