import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser, userActions } from 'entities/User';
import { TThunkExtra } from 'shared/types/stateSchema';
import { Url } from 'shared/constants/api';

type TParams = {
  userName: string;
  password: string;
}

type TThunkApiConfig<T> = {
  rejectValue: T;
  extra: TThunkExtra;
}

export const loginByUserName = createAsyncThunk<TUser, TParams, TThunkApiConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;

    try {
      const { data } = await extra.api.post<TUser>(Url.LOGIN, authData);

      if (!data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(data));

      return data;
    } catch (err) {
      return rejectWithValue('error');
    }
  },
);
