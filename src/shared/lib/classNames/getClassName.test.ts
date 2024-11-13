import { getClassName } from './getClassName';

describe('getClassName', () => {
  test('test1', () => {
    const expectVal = 'cl1 cl2 cl3';
    expect(getClassName('cl1', { cl3: true }, ['cl2'])).toBe(expectVal);
  });

  test('test2', () => {
    const expectVal = 'cl1 cl2';
    expect(getClassName('cl1', { cl3: false }, ['cl2'])).toBe(expectVal);
  });

  test('test3', () => {
    const expectVal = 'cl1 cl3';
    expect(getClassName('cl1', { cl3: true }, [])).toBe(expectVal);
  });
});
