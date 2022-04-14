import { createContext, useState } from "react";
import { useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const setAppTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme: setAppTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
