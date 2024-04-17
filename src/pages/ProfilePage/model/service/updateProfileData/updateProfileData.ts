import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateSchema';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile } from 'entities/Profile/types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<TProfile, void, TThunkApiConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
      const { data } = await extra.api.put(ProfileUrl.GET_DATA, getProfileForm(getState()));

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);
