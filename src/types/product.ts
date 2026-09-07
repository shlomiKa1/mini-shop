export const BASE_URL = "https://fakestoreapi.com/products";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
}

export interface ThemeProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export interface SearchBarProps {
  search: string;
  handleSearch: (val: string) => void;
}

export interface Products {
  products: Product[];
  isFavorites: boolean;
}

export interface ProductProps {
  product: Product;
  isFavorites: boolean;
}
export interface ProductDetail {
  product: Product;
}

export interface FavoritesStore {
  favorites: Product[];
  addProduct: (product: Product) => void;
  remove: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export type HeartIconProps = { filled: boolean };
