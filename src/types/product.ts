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
