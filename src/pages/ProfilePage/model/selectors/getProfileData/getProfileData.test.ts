import { StateScheme } from 'shared/types/stateScheme';
import { Country, Currency } from 'shared/constants/common';
import { expect } from '@storybook/test';
import { getProfileData } from './getProfileData';

const data = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('getProfileData', () => {
  test('should get profile data store', () => {
    const state = {
      profile: { data },
    } as StateScheme;

    expect(getProfileData(state)).toEqual(data);
  });

  test('should work with empty state', () => {
    expect(getProfileData({} as StateScheme)).toBe(undefined);
  });
});
