import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/constants';
import cls from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === Theme.DARK;

  return (
    <label
      className={`${cls.container} ${isDark ? cls.IsDark : cls.IsLight}`}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
    >
      <input
        type="checkbox"
        defaultChecked={theme === Theme.LIGHT}
        onChange={toggleTheme}
      />
      <div />
    </label>
  );
};
