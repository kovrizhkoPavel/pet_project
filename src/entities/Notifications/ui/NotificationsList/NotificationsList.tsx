import { getClassName } from '@/shared/lib/classNames/getClassName';
import type { TNotification } from '../../model/types/TNotification';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './NotificationsList.module.scss';

type TNotificationsListProps = {
  className?: string;
  notifications: TNotification[];

}

export const NotificationsList = (props: TNotificationsListProps) => {
  const { className, notifications } = props;
  return (
    <ul className={getClassName(cls.notificationsList, {}, [className])}>
      {notifications.map(
        (notification: TNotification) => (
          <NotificationItem
            className={cls.notificationItem}
            key={notification.id}
            notification={notification}
          />
        ),
      )}
    </ul>
  );
};
