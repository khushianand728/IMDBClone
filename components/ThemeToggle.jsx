"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = resolvedTheme;

  return (
    <div className="flex justify-start">
  <button
    onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    className="px-3 py-1 rounded"
  >
    {currentTheme === "dark" ? "🌞" : "🌙"}
  </button>
</div>

  );
}
