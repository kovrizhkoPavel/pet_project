export type TUser = {
  id: string;
  username: string;
  avatar?: string;
}

export type UserScheme = {
  _isInit: boolean;
  authData?: TUser | null;
}
