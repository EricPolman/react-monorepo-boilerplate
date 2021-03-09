import { createContext, FunctionComponent, useContext } from "react";

interface Theme {
  red: string;
  green: string;
  blue: string;
}
const ThemeContext = createContext({ red: "#ff0000", green: "#00ff00", blue: "#0000ff" });

export const useTheme: () => Theme = () => useContext(ThemeContext);

export const ThemeProvider: FunctionComponent = ({ children }) => (
  <ThemeContext.Provider value={{ red: "#ff0000", green: "#00ff00", blue: "#0000ff" }}>
    {children}
  </ThemeContext.Provider>
);
