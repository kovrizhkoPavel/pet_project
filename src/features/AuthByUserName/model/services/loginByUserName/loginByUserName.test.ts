import axios from 'axios';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { expect } from '@storybook/test';
import { userActions } from 'entities/User';
import TestAsyncThunk from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockAxios = jest.mocked(axios);

describe('loginByUserName', () => {
  const userValue = { id: 1, userName: 'admin' };
  const reqParams = { userName: 'admin', password: '123' };

  test('login success', async () => {
    mockAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const Thunk = new TestAsyncThunk(loginByUserName);
    const result = await Thunk.callThunk(reqParams);

    await expect(mockAxios.post).toHaveBeenCalled();
    await expect(Thunk.dispatch).toHaveBeenCalledTimes(3);
    await expect(result.meta.requestStatus).toBe('fulfilled');
    await expect(Thunk.dispatch).toBeCalledWith(userActions.setAuthData(userValue));
    await expect(result.payload).toEqual(userValue);
  });

  test('login error', async () => {
    mockAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const Thunk = new TestAsyncThunk(loginByUserName);
    const result = await Thunk.callThunk(reqParams);

    await expect(mockAxios.post).toHaveBeenCalled();
    await expect(Thunk.dispatch).toHaveBeenCalledTimes(2);
    await expect(result.meta.requestStatus).toBe('rejected');
    await expect(result.payload).toBe('error');
  });
});
