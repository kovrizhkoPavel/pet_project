import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getProfileFormReadonly } from './getProfileFormReadonly';

describe('getProfileFormReadonly', () => {
  test('should get profile is readonly state', () => {
    const state = {
      profileForm: { readonly: true },
    } as StateScheme;

    expect(getProfileFormReadonly(state)).toBe(true);
  });

  test('should work with empty state', () => {
    expect(getProfileFormReadonly({} as StateScheme)).toBe(false);
  });
});
