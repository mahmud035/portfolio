import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

/**
 * Context for the active color theme. Consumed via the `useTheme` hook.
 * Kept in its own module so the provider file only exports a component
 * (satisfies the react-refresh fast-refresh lint rule).
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
