import { FC, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <Button
        className={cls.button__auth}
        variant={ButtonVariant.FILL}
        onClick={() => setIsAuthOpen(true)}
      >
        {t('translation\:button_sing_in')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)}>
        dll;mc;mc;ms;m
      </Modal>
    </div>
  );
};
