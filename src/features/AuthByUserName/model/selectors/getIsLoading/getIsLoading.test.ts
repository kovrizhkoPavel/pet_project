import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
  const state = {
    authForm: {
      isLoading: true,
    },
  } as StateScheme;

  test('should get isLoading value', () => {
    expect(getIsLoading(state)).toBe(true);
  });
});
