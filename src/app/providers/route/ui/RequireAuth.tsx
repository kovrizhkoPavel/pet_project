import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'shared/lib/hooks/useAuth';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { TWithChildren } from 'shared/types/utils';
import { TUserRole, getUserRoles } from 'entities/User';
import { useSelector } from 'react-redux';

type TRequireAuthProps = {
  roles?: TUserRole[]
} & TWithChildren;

export const RequireAuth = ({ children, roles }: TRequireAuthProps) => {
  const { isUserAuth } = useAuth();
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  if (!isUserAuth) {
    return <Navigate replace to={RoutePath.main} state={{ from: location }} />;
  }
  if (isUserAuth && roles) {
    const hasRequiredRole = roles.some((role) => userRoles.includes(role));
    return hasRequiredRole
      ? children
      : <Navigate replace to={RoutePath.forbidden} state={{ from: location }} />;
  }

  return children;
};
