import { expect } from '@storybook/test';
import { StateScheme } from '@/shared/types/stateScheme';
import { Country, Currency } from '@/shared/constants/common';
import { getProfileFormData } from './getProfileFormData';

const formData = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('getProfileFormData', () => {
  test('should get profile data store', () => {
    const state = {
      profileForm: { formData },
    } as StateScheme;

    expect(getProfileFormData(state)).toEqual(formData);
  });

  test('should work with empty state', () => {
    expect(getProfileFormData({} as StateScheme)).toBe(undefined);
  });
});
