import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getError } from './getError';

describe('getError', () => {
  test('should get error message', () => {
    const state = {
      authForm: {
        error: 'error',
      },
    } as StateSchema;

    expect(getError(state)).toBe('error');
  });
});
