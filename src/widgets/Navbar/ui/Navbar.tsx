import { FC, useCallback, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onButtonSingInClick = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <Button
        className={cls.button__auth}
        variant={ButtonVariant.FILL}
        onClick={onButtonSingInClick}
      >
        {t('translation\:button_sing_in')}
      </Button>
      <LoginModal
        isOpen={isAuthOpen}
        onClose={onModalClose}
      />
    </div>
  );
};
