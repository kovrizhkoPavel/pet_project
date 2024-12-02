import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateScheme';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile, TProfileValidationError } from 'entities/Profile/types/profile';
import { profileValidator } from '../../../validator/profileValidator';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  TProfile,
  string,
  TThunkApiConfig<TProfileValidationError | string>>(
    'profile/updateProfileData',
    async (profileId, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;

      const formData = getProfileForm(getState());
      const validateError = profileValidator(formData);
      const isInvalid = Object.values(validateError).some(Boolean);

      if (isInvalid) {
        return rejectWithValue(validateError);
      }

      try {
        const { data } = await extra.api.put(
          `${ProfileUrl.GET_DATA}/${profileId}`,
          getProfileForm(getState()),
        );

        if (!data) {
          throw new Error();
        }

        return data;
      } catch (err) {
        return rejectWithValue(`${err}`);
      }
    },
  );
