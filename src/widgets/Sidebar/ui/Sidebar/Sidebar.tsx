import {FC, useState} from 'react';
import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

type TSidebarProps = {
  className?: string;
}

export const Sidebar: FC<TSidebarProps> = ({className}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onButtonClick = () => setIsCollapsed(!isCollapsed);
  return (
    <div className={
      getClassName(cls.sidebar, {[cls.collapsed]: isCollapsed}, [className])
    }>
      <button onClick={onButtonClick}>toggle</button>
      <div className={cls.switchers}>
        <LangSwitcher/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};
