import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
