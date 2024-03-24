import { CounterScheme } from 'entities/Counter';
import { UserScheme } from 'entities/User';

export type StateSchema = {
  counter: CounterScheme;
  user: UserScheme;
};
