import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { DEFAULT_IMAGE } from 'shared/constants/assets';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { useSelector } from 'react-redux';
import { getAuthData, getIsUserAdmin, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';

export const AuthDropdown = () => {
  const { t } = useTranslation();
  const authData = useSelector(getAuthData);
  const isUserAdmin = useSelector(getIsUserAdmin);
  const isAuthData = Boolean(authData);
  const dispatch = useAppDispatch();

  if (!isAuthData) return null;

  const logoutClickHandler = () => {
    dispatch(userActions.logout());
  };

  const adminItem = isUserAdmin ? [{
    content: t('translation\:title_admin'),
    href: RoutePath.admin,
  }] : [];

  return (
    <Dropdown
      content={<Avatar size={50} src={authData?.avatar || DEFAULT_IMAGE} />}
      position="bottom-left"
      items={[
        {
          content: t('translation\:button_logout'),
          onClick: logoutClickHandler,
        },
        {
          content: t('translation\:title_profile'),
          href: RoutePath.profile + authData!.id,
        },
        ...adminItem,
      ]}
    />
  );
};
