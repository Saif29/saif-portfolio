"use client";
import { useState, useEffect } from "react";

type Mode = "light" | "dark" | "system";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const SysIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="13" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Mode | null;
    if (saved === "light" || saved === "dark") setMode(saved);
    else setMode("system");
  }, []);

  useEffect(() => {
    const apply = () => {
      const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const effective = mode === "system" ? (sysDark ? "dark" : "light") : mode;
      document.documentElement.setAttribute("data-theme", effective);
    };
    apply();
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode]);

  useEffect(() => {
    if (mode === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", mode);
  }, [mode]);

  const btn = (val: Mode, label: string, Icon: React.FC) => (
    <button
      key={val}
      className={mode === val ? "active" : ""}
      onClick={() => setMode(val)}
      aria-label={`${label} theme`}
      title={`${label} theme`}
    >
      <Icon />
    </button>
  );

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {btn("light", "Light", SunIcon)}
      {btn("system", "System", SysIcon)}
      {btn("dark", "Dark", MoonIcon)}
    </div>
  );
}
