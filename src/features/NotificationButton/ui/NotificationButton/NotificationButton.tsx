import NotificationIcon from 'shared/assets/icon/notification-icon.svg';
import { Notifications } from 'entities/Notifications';
import cls from './NotificationButton.module.scss';

type TNotificationButtonProps = {
  className?: string;
}

const mocks = [{
  id: '1',
  title: 'Уведомление 1',
  description: 'Произошло какое-то событие',
  userId: '1',
},
{
  id: '2',
  title: 'Уведомление 2',
  description: 'Произошло какое-то событие',
  userId: '1',
  href: 'http://localhost:3000/admin',
}];

export const NotificationButton = (props: TNotificationButtonProps) => {
  const { className } = props;

  return (
    <Notifications className={className} notifications={mocks}>
      <NotificationIcon className={cls.icon} />
    </Notifications>
  );
};
