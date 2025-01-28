import { FC, useCallback, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { NotificationButton } from 'features/NotificationButton';
import { AuthDropdown } from '../AuthDropdown/AuthDropdown';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const authData = useSelector(getAuthData);
  const isAuthData = Boolean(authData);

  const logInClickHandler = () => {
    setIsAuthOpen(true);
  };

  const onModalClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      {isAuthData && <NotificationButton />}
      <AuthDropdown />
      {!isAuthData && (
        <>
          <Button
            className={cls.button__auth}
            variant={ButtonVariant.FILL}
            onClick={logInClickHandler}
          >
            {t('translation\:button_login')}
          </Button>
          <LoginModal
            isOpen={isAuthOpen}
            onClose={onModalClose}
          />
        </>
      )}
    </div>
  );
};
