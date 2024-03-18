import { FC, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import BurgerMenuIcon from 'shared/assets/icon/burger-menu.svg';
import HomeIcon from 'shared/assets/icon/home-icon.svg';
import AboutIcon from 'shared/assets/icon/about-icon.svg';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'shared/ui/ButtonIcon/ButtonIcon';
import { LinkIcon } from '../LinkIcon/LinkIcon';
import cls from './Sidebar.module.scss';

type TSidebarProps = {
  className?: string;
}

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();
  const onButtonClick = () => setIsCollapsed(!isCollapsed);
  return (
    <div
      className={
        getClassName(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])
      }
      data-testid="sidebar"
    >
      <div className={cls.wrapper}>
        <ButtonIcon
          onClick={onButtonClick}
          Icon={BurgerMenuIcon}
          className={cls.burgerMenuButton}
          dataTestId="sidebar_button"
        />
        <LinkIcon
          path={RoutePath.main}
          Icon={HomeIcon}
          label={!isCollapsed && t('translation\:nav_main')}
        />
        <LinkIcon
          path={RoutePath.about}
          Icon={AboutIcon}
          label={!isCollapsed && t('translation\:nav_about')}
        />
      </div>
      <div className={cls.switchers}>
        <LangSwitcher hasLabel={!isCollapsed} />
      </div>
    </div>
  );
};
