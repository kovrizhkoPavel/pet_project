import { StateScheme } from 'shared/types/stateScheme';
import { Country, Currency } from 'shared/constants/common';
import { expect } from '@storybook/test';
import { getEditFormProfileState } from './getProfileFormState';

const initialData = {
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
      profileForm: { initialData },
    } as StateScheme;

    expect(getEditFormProfileState(state)).toEqual({ data: initialData });
  });

  test('should work with empty state', () => {
    expect(getEditFormProfileState({} as StateScheme)).toBe(undefined);
  });
});
