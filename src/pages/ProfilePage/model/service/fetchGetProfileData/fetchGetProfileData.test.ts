import { expect } from '@storybook/test';
import TestAsyncThunk from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country, Currency } from 'shared/constants/common';
import { fetchGetProfileData } from './fetchGetProfileData';

const data = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 1,
  city: 'city',
  country: Country.Russia,
  currency: Currency.RUB,
};

describe('fetchProfileData', () => {
  test('fetchProfileData', async () => {
    const Thunk = new TestAsyncThunk(fetchGetProfileData);

    Thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await Thunk.callThunk('1');

    await expect(Thunk.api.get).toHaveBeenCalled();
    await expect(result.meta.requestStatus).toBe('fulfilled');
    await expect(result.payload).toEqual(data);
  });

  test('login error', async () => {
    const Thunk = new TestAsyncThunk(fetchGetProfileData);

    Thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await Thunk.callThunk('1');

    await expect(Thunk.api.get).toHaveBeenCalled();
    await expect(result.meta.requestStatus).toBe('rejected');
  });
});
