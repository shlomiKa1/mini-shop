import { useFavoritesStore } from "../store/favoritesStore";
import ProductList from "./ProductList";

const FavoritesList = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  return <ProductList products={favorites} isFavorites={true} />;
};

export default FavoritesList;
