import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(true);

  const getTheme = () => (theme ? "rgb(44, 44, 44)" : "gray");

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("THEME")));
  }, []);

  const sendLocal = () => {
    localStorage.setItem("THEME", JSON.stringify(!theme));
  };

  const changeTheme = (value) => {
    setTheme(value);
    sendLocal()
  };

  return {
    theme,
    changeTheme,
    getTheme,
  };
};
