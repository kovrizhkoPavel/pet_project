import { expect } from '@storybook/test';
import { StateScheme } from '@/shared/types/stateScheme';
import { Country, Currency } from '@/shared/constants/common';
import { getProfileInitialData } from './getProfileInitialData';

const initialData = {
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
      profileForm: { initialData },
    } as StateScheme;

    expect(getProfileInitialData(state)).toEqual(initialData);
  });

  test('should work with empty state', () => {
    expect(getProfileInitialData({} as StateScheme)).toBe(undefined);
  });
});
