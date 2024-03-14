import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { RoutePath } from 'shared/config/routeConfig/constants';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <div>
        <AppLink to={RoutePath.main} theme={AppLinkTheme.INVERTED} className={cls.link}>
          {t('translation\:nav_main')}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.INVERTED} className={cls.link}>
          {t('translation\:nav_about')}
        </AppLink>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
