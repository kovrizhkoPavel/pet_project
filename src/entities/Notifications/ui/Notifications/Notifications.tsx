import { getClassName } from 'shared/lib/classNames/getClassName';
import { Popover } from 'shared/ui/Popover/Popover';
import { TWithChildren } from 'shared/types/utils';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import cls from './Notifications.module.scss';
import { TNotification } from '../../model/types/TNotification';

type TNotificationProps = {
  className?: string;
  notifications: TNotification[];
} & TWithChildren;

export const Notifications = (props: TNotificationProps) => {
  const { className, children, notifications } = props;

  return (
    <div className={getClassName(cls.notification, {}, [className])}>
      <Popover trigger={children}>
        <div className={cls.notificationList}>
          {notifications.map(
            (notification: TNotification) => (
              <NotificationItem
                className={cls.notificationItem}
                key={notification.id}
                notification={notification}
              />
            ),
          )}
        </div>
      </Popover>
    </div>
  );
};
