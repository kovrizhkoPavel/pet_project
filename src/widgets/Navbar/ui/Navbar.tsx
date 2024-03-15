import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Navbar.module.scss';

type TNavbarProps = {
  className?: string;
}

export const Navbar: FC<TNavbarProps> = ({ className }) => (
  <div className={getClassName(cls.navbar, {}, [className])}>
    <ThemeSwitcher />
  </div>
);
