import { useState } from 'react';
import { TNotification } from 'entities/Notifications';
import NotificationIcon from 'shared/assets/icon/notification-icon.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { NotificationsList } from 'entities/Notifications/ui/NotificationsList';
import cls from '../NotificationButton/NotificationButton.module.scss';

type TMobileDeviceNotificationProps = {
  notifications: TNotification[];
};

export const MobileDeviceNotification = (props: TMobileDeviceNotificationProps) => {
  const { notifications } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <NotificationIcon className={cls.icon} onClick={() => setIsDrawerOpen(true)} />
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <NotificationsList notifications={notifications} />
      </Drawer>
    </>
  );
};
