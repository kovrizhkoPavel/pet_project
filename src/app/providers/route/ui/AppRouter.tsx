import { Route, Routes } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
