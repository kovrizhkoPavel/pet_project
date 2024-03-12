import { FC, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import ArrowIcon from 'shared/assets/icon/arrow.svg';
import cls from './Sidebar.module.scss';

type TSidebarProps = {
  className?: string;
}

export const Sidebar: FC<TSidebarProps> = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onButtonClick = () => setIsCollapsed(!isCollapsed);
  return (
    <div
      className={
        getClassName(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])
      }
      data-testid="sidebar"
    >
      <div className={cls.button_wrap}>
        <Button
          onClick={onButtonClick}
          data-testid="sidebar_button"
          className={cls.button_toggle}
        >
          <ArrowIcon />
        </Button>
      </div>
      <div className={cls.switchers}>
        <LangSwitcher />
      </div>
    </div>
  );
};
