import {FC} from 'react';
import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({className}) => {
  return (
    <div className={getClassName(cls.navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED} className={cls.link} children="main"/>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED} className={cls.link} children="about"/>
      </div>
    </div>
  );
};
