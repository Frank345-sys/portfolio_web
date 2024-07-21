import { useState, useEffect } from "react";

const useTheme = () => {
  /*
  const [themeDefauly, setThemeDefault] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [theme, setTheme] = useState(themeDefauly ? "dark" : "light");
  */

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeThemeManual = (theme) => {
    setTheme(theme);
  };

  return [theme, toggleTheme, changeThemeManual];
};

export default useTheme;
