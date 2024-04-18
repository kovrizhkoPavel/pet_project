import { Route, Routes } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';

const AppRouter: FC = () => {
  const isAuth = useSelector(getAuthData);
  const routes = routeConfig.filter((route) => !(!isAuth && route?.isOnlyAuth));

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
