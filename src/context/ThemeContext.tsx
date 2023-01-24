import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export type ThemeState = 'light' | 'dark';

interface ThemeContextTypes {
  theme: ThemeState;
  setTheme: Dispatch<SetStateAction<ThemeState>>;
  themeCondition: boolean;
}

interface ThemeProviderTypes {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextTypes>(
  {} as ThemeContextTypes
);

export const ThemeProvider = ({ children }: ThemeProviderTypes) => {
  const [theme, setTheme] = useState<ThemeContextTypes['theme']>('dark');
  const themeCondition = theme !== 'dark';
  // useEffect(() => {
  //   setTheme(localStorage.getItem('theme') || 'light');
  // }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeCondition }}>
      {children}
    </ThemeContext.Provider>
  );
};
