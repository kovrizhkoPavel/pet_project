import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../constants';
import { ThemeContext } from './ThemeContext';

type TUseThemeReturn = {
  theme: Theme;
  toggleTheme: VoidFunction;
}

export const useTheme = (): TUseThemeReturn => {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme?.(newTheme);
    document.body.className = newTheme;
  };

  document.body.className = theme;

  return { theme, toggleTheme };
};
