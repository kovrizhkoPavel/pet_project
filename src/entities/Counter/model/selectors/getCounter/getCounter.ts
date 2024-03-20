import { StateSchema } from 'shared/types/stateSchema';

export const getCounter = (store: StateSchema) => store.counter;
