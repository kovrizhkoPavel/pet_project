import {
  FC, ReactNode, useMemo, useState,
} from 'react';
import { LocalStorageKey } from 'shared/constants/localstorage';
import { ThemeContext } from '../lib/ThemeContext';
import { Theme } from '../constants';

type TThemeProviderProps = {
  children: ReactNode;
  initialTheme?: Theme;
}
const defaultTheme = localStorage.getItem(LocalStorageKey.THEME) as Theme || Theme.LIGHT;

const ThemeProvider: FC<TThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
