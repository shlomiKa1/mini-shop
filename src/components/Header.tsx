import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useFavoritesStore } from "../store/favoritesStore";
import "./styles/Header.css";

const Header = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <header className="header">
      <h1>Mini Shop</h1>
      <div className="link">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/favorites">Favorites({favorites.length})</NavLink>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
