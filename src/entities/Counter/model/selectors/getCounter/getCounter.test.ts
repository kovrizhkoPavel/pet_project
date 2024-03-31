import { expect } from '@storybook/test';
import { StateSchema } from 'shared/types/stateSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should get counter store', () => {
    const state = {
      counter: { value: 10 },
    } as StateSchema;

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
