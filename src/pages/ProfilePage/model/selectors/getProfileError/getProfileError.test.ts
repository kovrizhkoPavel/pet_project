import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should get profile error', () => {
    const state = {
      profile: { error: 'error' },
    } as StateScheme;

    expect(getProfileError(state)).toBe('error');
  });

  test('should work with empty state', () => {
    expect(getProfileError({} as StateScheme)).toBe('');
  });
});
