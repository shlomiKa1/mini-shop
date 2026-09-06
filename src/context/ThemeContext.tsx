import { createContext } from "react";
import type { ThemeProps } from "../types/product";

export const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  toggleTheme: () => {},
});
