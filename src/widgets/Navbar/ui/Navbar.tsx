import { FC, useCallback, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { DEFAULT_IMAGE } from 'shared/constants/assets';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/constants';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const authData = useSelector(getAuthData);
  const isAuthData = Boolean(authData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logInClickHandler = () => {
    setIsAuthOpen(true);
  };

  const logoutClickHandler = () => {
    dispatch(userActions.logout());
  };

  const onModalClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const Content = isAuthData ? (
    <>
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
            href: RoutePath.profile + authData?.id,
          },
        ]}
      />
    </>
  ) : (
    <>
      <Button
        className={cls.button__auth}
        variant={ButtonVariant.FILL}
        onClick={logInClickHandler}
      >
        {t('translation\:button_login')}
      </Button>
    </>
  );

  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <div className={cls.themeSwitcher}>
        <ThemeSwitcher />
      </div>
      {Content}
      {!isAuthData
        && (
          <LoginModal
            isOpen={isAuthOpen}
            onClose={onModalClose}
          />
        )}
    </div>
  );
};
