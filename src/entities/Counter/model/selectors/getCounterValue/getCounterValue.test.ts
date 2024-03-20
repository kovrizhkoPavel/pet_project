import { expect } from '@storybook/test';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should get counter value', () => {
    const state = {
      counter: { value: 10 },
    };

    expect(getCounterValue(state)).toBe(10);
  });
});
