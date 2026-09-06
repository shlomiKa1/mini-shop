import { useEffect, useRef } from "react";
import type { SearchBarProps } from "../types/product";

const SearchBar = ({ search, handleSearch }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        ref={inputRef}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="🔍 Search products..."
      />
    </div>
  );
};

export default SearchBar;
