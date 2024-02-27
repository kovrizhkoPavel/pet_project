import {FC} from 'react';
import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {Theme} from "app/providers/ThemeProvider/constants";
import LightIcon from "../../assets/icon/theme-light.svg";
import DarkIcon from "../../assets/icon/theme-dark.svg";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

type TThemeSwitcherProps = {
  className?: string;
}

export const ThemeSwitcher: FC<TThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      className={getClassName(cls.themeSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
    </Button>
  );
};

