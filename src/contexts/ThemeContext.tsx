import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "norah-theme",
  ...props
}: ThemeProviderProps) {
  // 1. Initialize state with ONLY the defaultTheme.
  //    This is "server-safe" and runs on both server and client.
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // 2. NEW: Use a useEffect to load the saved theme from localStorage.
  //    This hook ONLY runs on the client, after the component mounts.
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    setTheme(storedTheme);
  }, []); // The empty array [] ensures this runs only once on mount.

  // 3. Your original effect to apply the theme to the <html> tag.
  //    This is also client-only and runs correctly whenever 'theme' changes.
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]); // Runs when the 'theme' state changes

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Your useTheme hook is correct and needs no changes
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
