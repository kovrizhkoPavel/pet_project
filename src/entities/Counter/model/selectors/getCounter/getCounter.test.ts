import { expect } from '@storybook/test';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should get counter store', () => {
    const state = {
      counter: { value: 10 },
    };

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
