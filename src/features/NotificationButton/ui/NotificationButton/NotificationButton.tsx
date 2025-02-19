import NotificationIcon from '@/shared/assets/icon/notification-icon.svg';
import { Notifications } from '@/entities/Notifications';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { MobileDeviceNotification } from '../MobileDeviceNotification';
import { useGetNotificationsQuery } from '../../model/api/notificationApi';
import cls from './NotificationButton.module.scss';

type TNotificationButtonProps = {
  className?: string;
}

export const NotificationButton = (props: TNotificationButtonProps) => {
  const { className } = props;
  const { data = [], isFetching, isError } = useGetNotificationsQuery();
  const isMobile = useDevice();

  if (isError) return null;

  if (isFetching) {
    return <Skeleton width={20} height={20} border="50%" />;
  }

  if (isMobile) {
    return (
      <MobileDeviceNotification notifications={data} />
    );
  }

  return (
    <Notifications className={className} notifications={data}>
      <NotificationIcon className={cls.icon} />
    </Notifications>
  );
};
