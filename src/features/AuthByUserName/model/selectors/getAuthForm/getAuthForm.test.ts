import { expect } from '@storybook/test';
import { StateScheme } from '@/shared/types/stateScheme';
import { getAuthForm } from './getAuthForm';

describe('getAuthForm', () => {
  const state = {
    authForm: {
      username: 'user',
    },
  } as StateScheme;

  test('should return authForm store', () => {
    expect(getAuthForm(state)).toEqual({
      username: 'user',
    });
  });
});
