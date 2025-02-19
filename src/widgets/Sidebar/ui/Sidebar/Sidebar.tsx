import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import BurgerMenuIcon from '@/shared/assets/icon/burger-menu.svg';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon';
import { useSidebarLinks } from '../../hooks/useSidebarLinks';
import cls from './Sidebar.module.scss';
import { LinkIcon } from '../LinkIcon/LinkIcon';

type TSidebarProps = {
  className?: string;
}

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();

  const sidebarLinkList = useSidebarLinks();

  const onButtonClick = () => setIsCollapsed(!isCollapsed);

  return (
    <aside
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
          sidebarLinkList.map((item) => (
            <LinkIcon
              key={item.path}
              path={item.path}
              Icon={item.Icon}
              label={!isCollapsed ? t(item.label) : ''}
            />
          ))
        }
      </div>
      <div className={cls.switcher}>
        <LangSwitcher hasLabel={!isCollapsed} />
      </div>
    </aside>
  );
};
