import { TUser } from 'entities/User';

export type TComment = {
  id: string | number;
  text: string;
  user: TUser;
}
