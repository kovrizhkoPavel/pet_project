import { useSelector } from 'react-redux';
import { getAuthData, getIsUserAdmin } from 'entities/User';

export const useAuth = (): {isUserAuth: boolean, isUserAdmin: boolean} => {
  const auth = useSelector(getAuthData);
  const isAdmin = useSelector(getIsUserAdmin);

  return {
    isUserAuth: !!auth,
    isUserAdmin: isAdmin,
  };
};
