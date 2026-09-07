import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favoritesStore";
import type { ProductProps } from "../types/product";
import "./styles/ProductCard.css";
import TrashIcon from "./TrashIcon";
import HeartIcon from "./HeartIcon";

const ProductCard = ({ product, isFavorites }: ProductProps) => {
  const addProduct = useFavoritesStore((state) => state.addProduct);
  const remove = useFavoritesStore((state) => state.remove);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(product.id));

  const toggleFavorite = () => {
    if (isFavorite) {
      remove(product.id);
    } else {
      addProduct(product);
    }
  };

  return (
    <li key={product.id} className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="img-container">
          <img
            src={product.image}
            alt={product.title}
            className="image-ticket"
          />
        </div>
        <div className="body-ticket">
          <h1 className="title-ticket">{product.title}</h1>
          <p className="price-ticket price">{product.price}</p>
        </div>
      </Link>
      <button
        onClick={toggleFavorite}
        className={isFavorites ? "remove-fav-btn" : "fav-btn-ticket"}
      >
        {isFavorites ? (
          <span className="text">
            <TrashIcon /> Remove
          </span>
        ) : (
          <span className={isFavorite ? "heart filled" : "heart empty"}>
            <HeartIcon filled={isFavorite} />
          </span>
        )}
      </button>
      {isFavorites ? (
        <span className="heart filled tag-favorite">
          <HeartIcon filled={true} />
        </span>
      ) : (
        ""
      )}
    </li>
  );
};

export default ProductCard;
