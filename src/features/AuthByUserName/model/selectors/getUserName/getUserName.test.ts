import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getUserName } from './getUserName';

describe('getUserName', () => {
  const state = {
    authForm: {
      userName: 'user',
    },
  } as StateSchema;

  test('should get user name value', () => {
    expect(getUserName(state)).toBe('user');
  });
});
