import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig, TRouteProps } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const renderWithWrapper = ({
  path, element, isOnlyAuth, roles,
}: TRouteProps) => {
  const Element = isOnlyAuth ? <RequireAuth roles={roles}>{element}</RequireAuth> : element;

  return <Route key={path} path={path} element={Element} />;
};

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routeConfig.map(renderWithWrapper)}
    </Routes>
  </Suspense>
);

export default AppRouter;
