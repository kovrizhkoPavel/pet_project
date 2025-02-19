import { FC, memo, SVGProps } from 'react';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { RoutePath } from '@/shared/config/routeConfig/constants';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { TObjectValue } from '@/shared/types/utils';
import cls from './LinkIcon.module.scss';

type TLinkIconProps = {
  path: TObjectValue<typeof RoutePath>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  iconClassName?: string;
  label?: string;
}

export const LinkIcon: FC<TLinkIconProps> = memo(({
  className, iconClassName, path, Icon, label,
}) => (
  <AppLink
    to={path}
    theme={AppLinkTheme.INVERTED}
    className={getClassName(cls.link, {}, [className, cls.appLink])}
  >
    <div className={cls.link_container}>
      <Icon className={getClassName(cls.link_icon, {}, [iconClassName])} />
      { label && <div className={cls.link__label}>{label}</div> }
    </div>
  </AppLink>
));
