import { useNavigate } from "react-router-dom";
import type { ProductProps } from "../types/product";
import { useFavoritesStore } from "../store/favoritesStore";
import "./styles/ProductDetails.css";

const ProductDetails = ({ product, isFavorites }: ProductProps) => {
  const navigate = useNavigate();
  const toggleBack = () => {
    navigate(-1);
  };

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
    <div className="product-details">
      <div className="img-details">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="details">
        <h1 className="details-title">{product.title}</h1>
        <div className="details-category">
          <div className="tag-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <span className="tag">{product.category}</span>
        </div>
        <h1 className="details-price price">{product.price.toFixed(2)}</h1>
        <p className="details-description">{product.description}</p>
        <div className="details-btns">
          <button className="primary" onClick={toggleFavorite}>
            {isFavorite ? (
              <span className="heart filled">&#x2665;</span>
            ) : (
              <span className="heart empty">&#x2661;</span>
            )}
            {!isFavorite ? `Add to Favorites` : `Remove from Favorites`}
          </button>
          <button className="ghost" onClick={toggleBack}>
            Back to products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
