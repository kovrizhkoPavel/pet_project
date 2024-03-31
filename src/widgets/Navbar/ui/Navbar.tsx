import { FC, useCallback, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const isAuthData = Boolean(useSelector(getAuthData));
  const dispatch = useAppDispatch();

  const logInClickHandler = () => {
    setIsAuthOpen(true);
  };

  const logoutClickHandler = () => {
    dispatch(userActions.logout());
  };

  const onModalClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const btnText = isAuthData
    ? t('translation\:button_logout')
    : t('translation\:button_login');

  const onButtonClick = isAuthData ? logoutClickHandler : logInClickHandler;

  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <Button
        className={cls.button__auth}
        variant={ButtonVariant.FILL}
        onClick={onButtonClick}
      >
        {btnText}
      </Button>
      <LoginModal
        isOpen={isAuthOpen}
        onClose={onModalClose}
      />
    </div>
  );
};
