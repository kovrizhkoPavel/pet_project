import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getAuthForm } from './getAuthForm';

describe('getAuthForm', () => {
  const state = {
    authForm: {
      userName: 'user',
    },
  } as StateScheme;

  test('should return authForm store', () => {
    expect(getAuthForm(state)).toEqual({
      userName: 'user',
    });
  });
});
