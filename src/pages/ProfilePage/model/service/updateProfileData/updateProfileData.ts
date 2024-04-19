import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkApiConfig } from 'shared/types/stateSchema';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile, TProfileValidationError } from 'entities/Profile/types/profile';
import { validator } from 'pages/ProfilePage/validator/validator';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
  TProfile,
  void,
  TThunkApiConfig<TProfileValidationError | string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;

      const formData = getProfileForm(getState());

      const validateError = validator(formData);
      const isInvalid = Object.values(validateError).some(Boolean);

      if (isInvalid) {
        return rejectWithValue(validateError);
      }

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
