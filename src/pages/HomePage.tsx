import { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL, type Product } from "../types/product";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const { data, loading, error } = useFetch<Product[]>(BASE_URL);
  const [search, setSearch] = useState("");

  const products = useMemo(() => {
    return data ? data : [];
  }, [data]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-page">
      <h1>Products</h1>
      <SearchBar search={search} handleSearch={setSearch} />
      <ProductList products={filteredProducts} isFavorites={false} />
    </div>
  );
};

export default HomePage;
