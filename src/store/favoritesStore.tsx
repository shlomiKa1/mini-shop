import { create } from "zustand";
import { type FavoritesStore } from "../types/product";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addProduct: (product) =>
        set((state) => ({ favorites: [...state.favorites, product] })),
      remove: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((product) => product.id !== id),
        })),
      isFavorite: (id) => get().favorites.some((product) => product.id === id),
    }),
    { name: "favorites" },
  ),
);
