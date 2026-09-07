import FavoritesList from "../components/FavoritesList";
import { useFavoritesStore } from "../store/favoritesStore";

const FavoritesPage = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  if (favorites.length === 0) return <p>Is Empty</p>;

  return (
    <div className="favorites">
      <h1 className="home-page">My Favorites</h1>
      <FavoritesList />
    </div>
  );
};

export default FavoritesPage;
