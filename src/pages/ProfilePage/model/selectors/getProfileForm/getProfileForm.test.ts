import { StateSchema } from 'shared/types/stateSchema';
import { Country, Currency } from 'shared/constants/common';
import { expect } from '@storybook/test';
import { getProfileForm } from './getProfileForm';

const form = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('getProfileForm', () => {
  test('should get profile form store', () => {
    const state = {
      profile: { form },
    } as StateSchema;

    expect(getProfileForm(state)).toEqual(form);
  });

  test('should work with empty state', () => {
    expect(getProfileForm({} as StateSchema)).toEqual(undefined);
  });
});
