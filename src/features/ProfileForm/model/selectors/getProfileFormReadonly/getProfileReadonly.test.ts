import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should get profile is readonly state', () => {
    const state = {
      profile: { readonly: true },
    } as StateScheme;

    expect(getProfileReadonly(state)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(getProfileReadonly({} as StateScheme)).toBe(false);
  });
});
