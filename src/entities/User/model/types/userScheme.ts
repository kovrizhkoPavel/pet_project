export type TUser = {
  id: number;
  username: string;
  avatar?: string;
}

export type UserScheme = {
  _isInit: boolean;
  authData?: TUser | null;
}
