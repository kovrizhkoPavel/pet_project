import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should get profile is readonly state', () => {
    const state = {
      profile: { readonly: true },
    } as StateSchema;

    expect(getProfileReadonly(state)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(getProfileReadonly({} as StateSchema)).toBe(false);
  });
});
