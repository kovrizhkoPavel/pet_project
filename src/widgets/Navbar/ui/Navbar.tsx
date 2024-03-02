import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => (
  <div className={getClassName(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to="/" theme={AppLinkTheme.INVERTED} className={cls.link} children="main" />
      <AppLink to="/about" theme={AppLinkTheme.INVERTED} className={cls.link} children="about" />
    </div>
  </div>
);
