import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';

export const useAuth = (): {isUserAuth: boolean} => {
  const auth = useSelector(getAuthData);

  return {
    isUserAuth: !!auth,
  };
};
