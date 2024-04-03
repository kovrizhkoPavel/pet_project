import { StateSchema } from 'shared/types/stateSchema';
import { expect } from '@storybook/test';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
  const state = {
    authForm: {
      isLoading: true,
    },
  } as StateSchema;

  test('should get isLoading value', () => {
    expect(getIsLoading(state)).toBe(true);
  });
});
