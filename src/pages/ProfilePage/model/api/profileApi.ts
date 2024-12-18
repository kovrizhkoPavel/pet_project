import { rtkApi } from 'shared/api/rtkApi';
import { ProfileUrl } from 'shared/constants/api';
import { TProfile } from 'entities/Profile';

const profileApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query<TProfile[], string>({
      query: (id) => ({
        method: 'get',
        url: ProfileUrl.GET_DATA,
        params: { id },
      }),
    }),
  }),
});

export const { useGetProfileDataQuery } = profileApi;
