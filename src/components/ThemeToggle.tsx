import { useTheme } from "../context/ThemeContext";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;
