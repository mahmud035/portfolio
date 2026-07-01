import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/** Icon button that flips between light and dark themes. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="border-border bg-surface text-fg hover:bg-surface-2 inline-flex size-9 items-center justify-center rounded-lg border transition-colors"
    >
      {isDark ? (
        <Sun className="size-4.5" aria-hidden="true" />
      ) : (
        <Moon className="size-4.5" aria-hidden="true" />
      )}
    </button>
  );
}
