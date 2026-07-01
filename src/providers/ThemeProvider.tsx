import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext, type Theme } from './theme-context';

const STORAGE_KEY = 'theme';

/**
 * Resolve the initial theme. Mirrors the inline no-flash script in index.html:
 * a stored choice wins; otherwise default dark unless the OS explicitly
 * prefers light. Reads the class the inline script already set to stay in sync.
 */
function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  }
  return 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const toggleTheme = useCallback(
    () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark')),
    [],
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
