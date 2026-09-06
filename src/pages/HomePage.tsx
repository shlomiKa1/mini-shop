import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL, type Product } from "../types/product";

const HomePage = () => {
  const { data, loading, error } = useFetch<Product[]>(BASE_URL);
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return data ? data.filter((product) => product.title.includes(search)) : [];
  }, [data, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <SearchBar search={search} handleSearch={setSearch} />
      <ProductCard products={filteredProducts} />
    </div>
  );
};

export default HomePage;
