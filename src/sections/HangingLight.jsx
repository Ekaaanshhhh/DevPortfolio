import React, { useState, useCallback } from "react";
import { useTheme } from "../ThemeContext";

export default function HangingLight() {
  const { theme, toggleTheme } = useTheme();
  const [swinging, setSwinging] = useState(false);

  const handleClick = useCallback(() => {
    setSwinging(true);
    toggleTheme();

    // Remove swing class after animation ends
    setTimeout(() => setSwinging(false), 800);
  }, [toggleTheme]);

  const isLight = theme === "light";

  return (
    <div
      className="hanging-light"
      onClick={handleClick}
      role="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* The cord */}
      <div className="light-cord" />

      {/* The fixture + bulb */}
      <div className={`light-fixture ${swinging ? "swinging" : ""}`}>
        <div className="light-cap" />
        <div className="light-bulb" />
      </div>

      {/* Hover label */}
      <div className="light-label">
        Switch to light/dark mode
      </div>
    </div>
  );
}
