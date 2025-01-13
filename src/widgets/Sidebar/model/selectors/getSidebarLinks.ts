import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/constants';
import HomeIcon from 'shared/assets/icon/home-icon.svg';
import AboutIcon from 'shared/assets/icon/about-icon.svg';
import ProfileIcon from 'shared/assets/icon/profile-icon.svg';
import ArticleIcon from 'shared/assets/icon/article-icon.svg';
import { TSidebarLink } from '../types/sidebarLink';

const staticLinks: TSidebarLink[] = [
  {
    path: RoutePath.main,
    Icon: HomeIcon,
    label: 'translation\:nav_main',
  },
  {
    path: RoutePath.admin,
    Icon: AboutIcon,
    label: 'translation\:nav_admin',
  },
];

export const getSidebarLinks = createSelector(
  getAuthData,
  (state) => {
    if (!state) return staticLinks;

    const authOnlyLinks: TSidebarLink[] = [{
      path: `${RoutePath.profile}${state.id}`,
      Icon: ProfileIcon,
      label: 'translation\:nav_profile',
    },
    {
      path: RoutePath.articles,
      Icon: ArticleIcon,
      label: 'translation\:nav_article',
    }];

    return [...staticLinks, ...authOnlyLinks];
  },
);
