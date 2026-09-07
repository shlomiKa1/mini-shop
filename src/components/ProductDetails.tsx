import { useNavigate } from "react-router-dom";
import type { ProductDetail } from "../types/product";
import { useFavoritesStore } from "../store/favoritesStore";
import "./styles/ProductDetails.css";
import TagProduct from "./TagProduct";
import HeartIcon from "./HeartIcon";

const ProductDetails = ({ product }: ProductDetail) => {
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
          <TagProduct />
          <span className="tag">{product.category}</span>
        </div>
        <h1 className="details-price price">{product.price.toFixed(2)}</h1>
        <p className="details-description">{product.description}</p>
        <div className="details-btns">
          <button className="primary" onClick={toggleFavorite}>
            {/* {isFavorite ? (
              <span className="heart filled">&#x2665;</span>
            ) : (
              <span className="heart empty">&#x2661;</span>
            )} */}
            <span className={isFavorite ? "heart filled" : "heart empty"}>
              <HeartIcon filled={isFavorite} />
            </span>
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
