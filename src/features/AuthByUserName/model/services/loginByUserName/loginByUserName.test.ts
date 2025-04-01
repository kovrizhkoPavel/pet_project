import { expect } from '@storybook/test';
import { userActions, UserRole } from '@/entities/User';
import TestAsyncThunk from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

describe('loginByUserName', () => {
  const userValue = { id: '1', username: 'admin', roles: [UserRole.USER] };
  const reqParams = { username: 'admin', password: '123' };

  test('login success', async () => {
    const Thunk = new TestAsyncThunk(loginByUserName);

    Thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await Thunk.callThunk(reqParams);

    await expect(Thunk.api.post).toHaveBeenCalled();
    await expect(Thunk.dispatch).toHaveBeenCalledTimes(3);
    await expect(result.meta.requestStatus).toBe('fulfilled');
    await expect(Thunk.dispatch).toBeCalledWith(
      userActions.setAuthData(userValue),
    );
    await expect(result.payload).toEqual(userValue);
  });

  test('login error', async () => {
    const Thunk = new TestAsyncThunk(loginByUserName);

    Thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await Thunk.callThunk(reqParams);

    await expect(Thunk.api.post).toHaveBeenCalled();
    await expect(Thunk.dispatch).toHaveBeenCalledTimes(2);
    await expect(result.meta.requestStatus).toBe('rejected');
    await expect(result.payload).toBe('error');
  });
});
