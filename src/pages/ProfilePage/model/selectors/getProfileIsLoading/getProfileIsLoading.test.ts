import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should get profile is loading state', () => {
    const state = {
      profile: { isLoading: true },
    } as StateSchema;

    expect(getProfileIsLoading(state)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(getProfileIsLoading({} as StateSchema)).toBe(false);
  });
});
