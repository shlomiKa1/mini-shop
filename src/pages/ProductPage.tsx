import { useParams } from "react-router-dom";
import { BASE_URL, type Product } from "../types/product";
import { useFetch } from "../hooks/useFetch";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch<Product>(BASE_URL.concat(`/${id}`));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>404 Product not found</p>;

  console.log(data);

  return (
    <div>
      <ProductDetails product={data} />
    </div>
  );
};

export default ProductPage;
