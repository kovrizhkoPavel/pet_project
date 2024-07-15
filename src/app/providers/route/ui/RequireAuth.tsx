import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { ReactNode } from 'react';

export const RequireAuth = ({ children }: {children: ReactNode}) => {
  const { isUserAuth } = useAuth();
  const location = useLocation();

  return isUserAuth ? children : (
    <Navigate replace to={RoutePath.main} state={{ from: location }} />
  );
};
