import type { Products } from "../types/product";

const ProductCard = ({ products }: Products) => {
  return (
    <div>
      {products.map((product) => (
        <li key={product.id} className="card-container">
          <img src={product.image} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ProductCard;
