export interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export interface ThemesProviderProps {
  initialTheme?: string;
  children: React.ReactNode;
}
