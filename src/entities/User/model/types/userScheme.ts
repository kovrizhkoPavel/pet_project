export type TUser = {
  id: number;
  userName: string;
}

export type UserScheme = {
  authData?: TUser | null;
}
