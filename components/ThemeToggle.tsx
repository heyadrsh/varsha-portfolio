"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const current = document.documentElement.dataset.theme;
      if (current === "dark" || current === "light") {
        setTheme(current);
      } else {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initial = saved === "dark" || saved === "light" ? saved : (prefersDark ? "dark" : "light");
        setTheme(initial);
        document.documentElement.dataset.theme = initial;
      }
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <div className="theme-toggle-anchor theme-toggle-anchor-home">
      <button
        type="button"
        className="theme-toggle"
        aria-pressed={theme === "dark"}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={toggle}
      >
        <span className="theme-toggle-icon theme-toggle-invert-1" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="14" height="14" fill="none">
            <rect x="3.5" y="3.5" width="41" height="41" rx="20.5" stroke="currentColor" strokeWidth="5" />
            <path d="M1.36353 24C1.36353 11.2975 11.661 1 24.3635 1V1V47V47C11.661 47 1.36353 36.7025 1.36353 24V24Z" fill="currentColor" />
          </svg>
        </span>
        <span className="theme-toggle-icon theme-toggle-invert-2" aria-hidden="true">
          <svg viewBox="0 0 48 48" width="14" height="14" fill="none">
            <rect x="-2.5" y="2.5" width="41" height="41" rx="20.5" transform="matrix(-1 0 0 1 41.6365 1)" stroke="currentColor" strokeWidth="5" />
            <path d="M46.2729 24C46.2729 11.2975 35.9755 1 23.2729 1V1V47V47C35.9755 47 46.2729 36.7025 46.2729 24V24Z" fill="currentColor" />
          </svg>
        </span>
      </button>
    </div>
  );
}
