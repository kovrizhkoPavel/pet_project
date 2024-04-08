import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getPassword } from './getPassword';

describe('getPassword', () => {
  const state = {
    authForm: {
      password: '123',
    },
  } as StateSchema;

  test('should get password value', () => {
    expect(getPassword(state)).toBe('123');
  });
});
