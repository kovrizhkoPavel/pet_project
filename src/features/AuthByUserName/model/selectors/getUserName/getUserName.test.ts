import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getUserName } from './getUserName';

describe('getUserName', () => {
  const state = {
    authForm: {
      username: 'user',
    },
  } as StateScheme;

  test('should get user name value', () => {
    expect(getUserName(state)).toBe('user');
  });
});
