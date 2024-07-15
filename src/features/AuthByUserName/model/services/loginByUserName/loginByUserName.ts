import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser, userActions } from 'entities/User';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { AuthUrl } from 'shared/constants/api';

type TParams = {
  userName: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<TUser, TParams, TThunkApiConfig<string>>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;

    try {
      const { data } = await extra.api.post<TUser>(AuthUrl.LOGIN, authData);

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
