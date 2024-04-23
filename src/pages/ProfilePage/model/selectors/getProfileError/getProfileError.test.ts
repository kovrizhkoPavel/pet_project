import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should get profile error', () => {
    const state = {
      profile: { error: 'error' },
    } as StateSchema;

    expect(getProfileError(state)).toBe('error');
  });

  test('should work with empty state', () => {
    expect(getProfileError({} as StateSchema)).toBe('');
  });
});
