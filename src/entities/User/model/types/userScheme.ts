export type TUser = {
  id: number;
  userName: string;
  avatar?: string;
}

export type UserScheme = {
  _isInit: boolean;
  authData?: TUser | null;
}
