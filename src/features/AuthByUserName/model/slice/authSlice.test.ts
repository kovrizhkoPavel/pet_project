import { expect } from '@storybook/test';
import { AuthSchema } from '../types/authSchema';
import { authActions, authReducer } from './authSlice';

describe('authSlice', () => {
  let state: AuthSchema;

  beforeEach(() => {
    state = {
      username: '',
      password: '',
    };
  });

  test('should set user name', () => {
    expect(authReducer(state, authActions.setUserName('test1'))).toEqual({
      username: 'test1',
      password: '',
    });
  });

  test('should set password', () => {
    expect(authReducer(state, authActions.setPassword('test1'))).toEqual({
      username: '',
      password: 'test1',
    });
  });
});
