import { FC, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import BurgerMenuIcon from 'shared/assets/icon/burger-menu.svg';
import { ButtonIcon } from 'shared/ui/ButtonIcon/ButtonIcon';
import { getSidebarLinkList } from 'widgets/Sidebar/model/GetSidebarLinkList';
import { LinkIcon } from '../LinkIcon/LinkIcon';
import cls from './Sidebar.module.scss';

type TSidebarProps = {
  className?: string;
}

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
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
        {
          getSidebarLinkList().map((item) => (
            <LinkIcon
              key={item.path}
              path={item.path}
              Icon={item.Icon}
              label={!isCollapsed && item.label}
            />
          ))
        }
      </div>
      <div className={cls.switcher}>
        <LangSwitcher hasLabel={!isCollapsed} />
      </div>
    </div>
  );
};
