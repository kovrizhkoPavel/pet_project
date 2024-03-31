import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { AuthSchema } from 'features/AuthByUserName';

export type StateSchema = {
  counter?: CounterScheme;
  user?: UserScheme;
  authForm?: AuthSchema;
};
