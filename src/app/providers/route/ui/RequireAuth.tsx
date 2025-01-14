import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { ReactNode } from 'react';

export const RequireAuth = ({ children }: {children: ReactNode}) => {
  const { isUserAuth, isUserAdmin } = useAuth();
  const location = useLocation();

  if (isUserAuth && !isUserAdmin) {
    return <Navigate replace to={RoutePath.forbidden} state={{ from: location }} />;
  }

  return isUserAuth ? children : (
    <Navigate replace to={RoutePath.main} state={{ from: location }} />
  );
};
