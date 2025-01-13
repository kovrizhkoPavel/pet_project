export { TUser, UserScheme } from './model/types/userScheme';
export { userActions, userReducer } from './model/slice/userSlice';
export { getUserState } from './model/selectors/getUserState/getUserState';
export { getAuthData } from './model/selectors/getAuthData/getAuthData';
export { UserRole } from './model/constatnts';
export { getIsUserAdmin, getIsUserManager } from './model/selectors/getRoles/getRoles';
