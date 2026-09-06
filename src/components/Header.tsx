import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import type { ThemeProps } from "../types/product";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useState<ThemeProps["theme"]>("light");
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <header>
      <p>Mini Shop</p>
      <Link to="/">Products</Link>
      <Link to="/favorites">Favorites({})</Link>
      <ThemeContext value={{ theme, toggleTheme }}>
        <ThemeToggle />
      </ThemeContext>
    </header>
  );
};

export default Header;
