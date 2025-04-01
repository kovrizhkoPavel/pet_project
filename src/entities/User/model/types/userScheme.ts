import { TObjectValue } from '@/shared/types/utils';
import { UserRole } from '../constatnts';

export type TUserRole = TObjectValue<typeof UserRole>;

export type TUser = {
  id: string;
  username: string;
  avatar?: string;
  roles: TUserRole[];
};

export type UserScheme = {
  _isInit: boolean;
  authData?: TUser | null;
};
