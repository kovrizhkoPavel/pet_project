import { useSelector } from 'react-redux';
import { RoutePath } from '@/shared/config/routeConfig/constants';
import HomeIcon from '@/shared/assets/icon/home-icon.svg';
import AboutIcon from '@/shared/assets/icon/about-icon.svg';
import ProfileIcon from '@/shared/assets/icon/profile-icon.svg';
import ArticleIcon from '@/shared/assets/icon/article-icon.svg';
import { getAuthData, getIsUserAdmin } from '@/entities/User';
import { TSidebarLink } from '../model/types/sidebarLink';

const staticLinks: TSidebarLink[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    label: 'translation\:nav_main',
  },
];

const adminLink = {
  path: RoutePath.admin,
  Icon: AboutIcon,
  label: 'translation\:nav_admin',
};

export const useSidebarLinks = (): TSidebarLink[] => {
  const isUserAdmin = useSelector(getIsUserAdmin);
  const authData = useSelector(getAuthData);

  if (!authData) return staticLinks;

  const authOnlyLinks: TSidebarLink[] = [
    {
      path: `${RoutePath.profile}${authData.id}`,
      Icon: ProfileIcon,
      label: 'translation\:nav_profile',
    },
    {
      path: RoutePath.articles,
      Icon: ArticleIcon,
      label: 'translation\:nav_article',
    },
  ];

  if (isUserAdmin) return [...staticLinks, adminLink, ...authOnlyLinks];

  return [...staticLinks, ...authOnlyLinks];
};
