import { FC, Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/route';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => (
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

export default App;
