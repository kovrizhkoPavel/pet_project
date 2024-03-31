import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser, userActions } from 'entities/User';

type TParams = {
  userName: string;
  password: string;
}

type TThunkApiConfig = {
  rejectValue: string;
}

const URL = 'http://localhost:8000/login';

export const loginByUserName = createAsyncThunk<TUser, TParams, TThunkApiConfig>(
  'login/loginByUserName',
  async (authData, thunkAPI) => {
    try {
      const { data } = await axios.post<TUser>(URL, authData);

      if (!data) {
        throw new Error();
      }

      thunkAPI.dispatch(userActions.setAuthData(data));

      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);
