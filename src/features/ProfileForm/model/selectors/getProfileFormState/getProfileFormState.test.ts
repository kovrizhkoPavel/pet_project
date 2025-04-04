import { expect } from '@storybook/test';
import { StateScheme } from '@/shared/types/stateScheme';
import { Country, Currency } from '@/shared/constants/common';
import { getProfileFormState } from './getProfileFormState';

const initialData = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('getProfileFormState', () => {
  test('should get profile store', () => {
    const state = {
      profileForm: { initialData },
    } as StateScheme;

    expect(getProfileFormState(state)).toEqual({ initialData });
  });

  test('should work with empty state', () => {
    expect(getProfileFormState({} as StateScheme)).toBe(undefined);
  });
});
