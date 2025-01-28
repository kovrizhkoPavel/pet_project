import { AppLink } from 'shared/ui/AppLink/AppLink';
import { TNotification } from '../../model/types/TNotification';
import cls from './NotificationItem.module.scss';

type TNotificationItemProps = {
  className?: string;
  notification: TNotification;
}

export const NotificationItem = (props: TNotificationItemProps) => {
  const { className, notification: { href, title, description } } = props;
  return (
    <div className={className}>
      <h3>{title}</h3>
      {href
        ? <AppLink to={href}>{description}</AppLink>
        : <div className={cls.description}>{description}</div>}
    </div>
  );
};
