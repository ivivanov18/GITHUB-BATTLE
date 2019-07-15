import React, { useContext } from "react";
import { ThemeContext } from "./theme";

function ThemeToggler() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button className="btn-clear" onClick={toggleTheme}>
      {theme === "light" ? "🔦" : "💡"}
    </button>
  );
}

export default ThemeToggler;
