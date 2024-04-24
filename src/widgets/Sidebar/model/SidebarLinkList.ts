import { TObjectValue } from 'shared/types/types';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { FC, SVGProps } from 'react';
import HomeIcon from 'shared/assets/icon/home-icon.svg';
import AboutIcon from 'shared/assets/icon/about-icon.svg';
import ProfileIcon from 'shared/assets/icon/profile-icon.svg';

type TSidebarLink = {
  path: TObjectValue<typeof RoutePath>;
  Icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  isOnlyAuth?: boolean;
}

export const sidebarLinkList:TSidebarLink[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    label: 'translation\:nav_main',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    label: 'translation\:nav_about',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    label: 'translation\:nav_profile',
    isOnlyAuth: true,
  },
];
