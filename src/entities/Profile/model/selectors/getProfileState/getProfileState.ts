import { StateSchema } from 'shared/types/stateSchema';

export const getProfileState = (state: StateSchema) => state?.profile || '';
