import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getError } from './getError';

describe('getError', () => {
  test('should get error message', () => {
    const state = {
      authForm: {
        error: 'error',
      },
    } as StateScheme;

    expect(getError(state)).toBe('error');
  });
});
