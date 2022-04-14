import { createContext, useState } from "react";
import { useContext } from "react/cjs/react.production.min";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useContext, ThemeProvider };
