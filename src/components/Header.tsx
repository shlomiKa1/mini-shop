import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import type { ThemeProps } from "../types/product";
import { ThemeContext } from "../context/ThemeContext";
import { useFavoritesStore } from "../store/favoritesStore";
import "./styles/Header.css";

const Header = () => {
  const [theme, setTheme] = useState<ThemeProps["theme"]>("light");
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  const favorites = useFavoritesStore((state) => state.favorites);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={`header ${theme}`}>
      <h1>Mini Shop</h1>
      <div className="btns">
        <div className="link">
          <NavLink to="/">Products</NavLink>
          <NavLink to="/favorites">Favorites({favorites.length})</NavLink>
        </div>
        <ThemeContext value={{ theme, toggleTheme }}>
          <ThemeToggle />
        </ThemeContext>
      </div>
    </header>
  );
};

export default Header;
