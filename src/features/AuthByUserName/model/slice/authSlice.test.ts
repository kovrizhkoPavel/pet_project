import { authReducer, AuthSchema } from 'features/AuthByUserName';
import { authActions } from 'features/AuthByUserName/model/slice/authSlice';
import { expect } from '@storybook/test';

describe('authSlice', () => {
  let state: AuthSchema;

  beforeEach(() => {
    state = {
      username: '',
      password: '',
    };
  });

  test('should set user name', () => {
    expect(authReducer(state, authActions.setUserName('test1')))
      .toEqual({ username: 'test1', password: '' });
  });

  test('should set password', () => {
    expect(authReducer(state, authActions.setPassword('test1')))
      .toEqual({ username: '', password: 'test1' });
  });
});
