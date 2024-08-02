import { ProfileScheme, TProfile } from 'entities/Profile';
import { Country, Currency } from 'shared/constants/common';
import { expect } from '@storybook/test';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

describe('profileSlice', () => {
  let state: ProfileScheme;
  let data: TProfile;

  beforeEach(() => {
    state = {
      isLoading: false,
      validationError: undefined,
      error: undefined,
      readonly: true,
      form: data,
      data,
    } as ProfileScheme;

    data = {
      username: 'username',
      firstname: 'firstname',
      lastname: 'lastname',
      age: 1,
      city: 'city',
      country: Country.Russia,
      currency: Currency.RUB,
    };
  });

  test('should set readonly', () => {
    expect(profileReducer(
      state as ProfileScheme,
      profileActions.setReadonly(false),
    )).toEqual({ ...state, readonly: false });
  });

  test('should set form', () => {
    const changedData = { username: 'test' };

    expect(profileReducer(
      state as ProfileScheme,
      profileActions.changeProfile(changedData),
    )).toEqual({ ...state, form: { ...data, ...changedData } });
  });

  test('should reset form', () => {
    const changedData = { username: 'test' };
    profileReducer(
      state as ProfileScheme,
      profileActions.changeProfile(changedData),
    );

    expect(profileReducer(
      state as ProfileScheme,
      profileActions.resetProfile(),
    )).toEqual({ ...state, form: data });
  });

  test('test update profile service pending', async () => expect(
    profileReducer(state, updateProfileData.pending('', '')),
  ).toEqual({ ...state, isLoading: true }));

  test('test update profile service fulfilled', async () => expect(
    profileReducer(state, updateProfileData.fulfilled(data, '', '')),
  ).toEqual(state));
});
