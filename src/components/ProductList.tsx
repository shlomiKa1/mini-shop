import type { Products } from "../types/product";
import ProductCard from "./ProductCard";

const ProductList = ({ products, isFavorites }: Products) => {
  return (
    <article className="list-products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isFavorites={isFavorites} />
      ))}
    </article>
  );
};

export default ProductList;
