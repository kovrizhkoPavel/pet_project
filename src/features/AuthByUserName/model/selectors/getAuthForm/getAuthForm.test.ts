import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getAuthForm } from './getAuthForm';

describe('getAuthForm', () => {
  const state = {
    authForm: {
      userName: 'user',
    },
  } as StateSchema;

  test('should return authForm store', () => {
    expect(getAuthForm(state)).toEqual({
      userName: 'user',
    });
  });
});
