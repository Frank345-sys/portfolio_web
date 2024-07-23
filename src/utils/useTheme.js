import { useState, useEffect, useCallback } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /*
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeThemeManual = (theme) => {
    setTheme(theme);
  };
  */
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const changeThemeManual = useCallback((theme) => {
    setTheme(theme);
  }, []);

  return [theme, toggleTheme, changeThemeManual];
};

export default useTheme;
