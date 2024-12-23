import { rtkApi } from 'shared/api/rtkApi';
import { TProfile } from 'entities/Profile';
import { ProfileUrl } from 'shared/constants/api';

const profileFormApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation<void, TProfile>({
      query: (body) => ({
        url: `${ProfileUrl.GET_DATA}/${body.id}`,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useEditProfileMutation } = profileFormApi;
