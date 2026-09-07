import FavoritesList from "../components/FavoritesList";
import ProductList from "../components/ProductList";
import { useFavoritesStore } from "../store/favoritesStore";

const FavoritesPage = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  if (favorites.length === 0) return <p>Is Empty</p>;

  return (
    <div className="favorites">
      <h1 className="home-page">My Favorites</h1>
      <ProductList products={favorites} isFavorites={true} />
    </div>
  );
};

export default FavoritesPage;
