import { expect } from '@storybook/test';
import { StateSchema } from 'shared/types/stateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should get counter value', () => {
    const state = {
      counter: { value: 10 },
    } as StateSchema;

    expect(getCounterValue(state)).toBe(10);
  });
});
