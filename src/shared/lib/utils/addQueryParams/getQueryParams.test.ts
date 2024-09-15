import { expect } from '@storybook/test';
import { getQueryParams } from './getQueryParams';

describe('shared/getQueryParams', () => {
  test('test with one param', () => {
    const param = getQueryParams({ test: '11' });

    expect(param).toBe('?test=11');
  });
  test('test with multiply params', () => {
    const param = getQueryParams({ test: '11', test2: '22', test3: '33' });

    expect(param).toBe('?test=11&test2=22&test3=33');
  });
  test('test with one param undefined', () => {
    const param = getQueryParams({ test: '11', test2: undefined });

    expect(param).toBe('?test=11');
  });
});
