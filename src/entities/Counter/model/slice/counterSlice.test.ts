import { expect } from '@storybook/test';
import { CounterScheme } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  let state: CounterScheme = { value: 10 };

  beforeEach(() => {
    state = { value: 10 };
  });

  test('should increment state value', () => {
    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 11 });
  });

  test('should decrement state value', () => {
    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test('should empty state value', () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
