import { expect } from '@storybook/test';
import TestAsyncThunk from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country, Currency } from 'shared/constants/common';
import { ProfileValidatorError, TProfile } from 'entities/Profile';
import { StateSchema } from 'shared/types/stateSchema';
import { updateProfileData } from './updateProfileData';

const data: TProfile = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

const invalidData = {
  username: 'username',
  firstname: '',
  lastname: '',
  age: 1.1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

const validateError = {
  firstname: ProfileValidatorError.REQUIRED,
  lastname: ProfileValidatorError.REQUIRED,
  age: ProfileValidatorError.ONLY_INTEGER,
};

describe('updateProfileData', () => {
  test('success', async () => {
    const Thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: data } } as StateSchema,
    );

    Thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await Thunk.callThunk();

    await expect(Thunk.api.put).toHaveBeenCalled();
    await expect(result.meta.requestStatus).toBe('fulfilled');
    await expect(result.payload).toEqual(data);
  });

  test('login error', async () => {
    const Thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: invalidData } } as StateSchema,
    );

    Thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await Thunk.callThunk();

    await expect(result.meta.requestStatus).toBe('rejected');
    await expect(result.payload).toEqual(validateError);
  });
});
