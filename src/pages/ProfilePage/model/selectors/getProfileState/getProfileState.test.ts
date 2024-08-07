import { StateScheme } from 'shared/types/stateScheme';
import { Country, Currency } from 'shared/constants/common';
import { expect } from '@storybook/test';
import { getProfileState } from './getProfileState';

const data = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('getProfileState', () => {
  test('should get profile store', () => {
    const state = {
      profile: { data },
    } as StateScheme;

    expect(getProfileState(state)).toEqual({ data });
  });

  test('should work with empty state', () => {
    expect(getProfileState({} as StateScheme)).toBe(undefined);
  });
});
