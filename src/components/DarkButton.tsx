import { useEffect, useState } from "react";
export default function DarkButton() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("data-theme")
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme || "light");
    localStorage.setItem("data-theme", theme || "light");
  }, [theme]);

  return (
    <button
      className="textPreset8 dark:text-neutral-200 outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-4  dark:focus:ring-offset-neutral-900 dark:focus:ring-offset-4 focus:rounded-xl text-neutral-500 cursor-pointer items-center flex gap-4"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <p>{theme ? theme.toUpperCase() : "THEME"}</p>
      <img
        src={`src/assets/icon-${theme == "light" ? "sun" : "moon"}.svg`}
        alt={theme ? theme.toUpperCase() : "THEME"}
      />
    </button>
  );
}
