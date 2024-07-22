import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile } from 'entities/Profile/types/profile';

export const fetchProfileData = createAsyncThunk<TProfile, string, TThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.get(`${ProfileUrl.GET_DATA}/${id}`);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);
