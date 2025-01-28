import { rtkApi } from 'shared/api/rtkApi';
import { TNotification } from 'entities/Notifications';
import { Notifications } from 'shared/constants/api';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query<TNotification[], void>({
      query: () => ({
        method: 'get',
        url: Notifications.GET_NOTIFICATIONS,
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
