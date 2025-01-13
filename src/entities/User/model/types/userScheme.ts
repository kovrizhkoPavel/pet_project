import { TObjectValue } from 'shared/types/utils';
import { UserRole } from '../constatnts';

export type TUser = {
  id: string;
  username: string;
  avatar?: string;
  roles: TObjectValue<typeof UserRole>[]
}

export type UserScheme = {
  _isInit: boolean;
  authData?: TUser | null;
}
