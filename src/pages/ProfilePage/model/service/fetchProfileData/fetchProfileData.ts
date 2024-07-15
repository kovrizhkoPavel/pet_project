import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile } from 'entities/Profile/types/profile';

export const fetchProfileData = createAsyncThunk<TProfile, void, TThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.get(ProfileUrl.GET_DATA);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);
