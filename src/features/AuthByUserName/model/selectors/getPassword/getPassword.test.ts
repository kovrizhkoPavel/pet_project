import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getPassword } from './getPassword';

describe('getPassword', () => {
  const state = {
    authForm: {
      password: '123',
    },
  } as StateScheme;

  test('should get password value', () => {
    expect(getPassword(state)).toBe('123');
  });
});
