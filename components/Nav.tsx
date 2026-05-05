"use client";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { id: "about", n: "01", label: "about" },
  { id: "experience", n: "02", label: "experience" },
  { id: "projects", n: "03", label: "projects" },
  { id: "skills", n: "04", label: "skills" },
  { id: "contact", n: "05", label: "contact" },
];

export function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="dot" />
          <span>saif.dev</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
              <span className="idx">{l.n}.</span>{l.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
        <a className="nav-cta" href="#contact">get in touch ↗</a>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)}>
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>
      <div className="mobile-menu">
        {NAV_LINKS.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={close}>
            <span className="idx">{l.n}.</span>{l.label}
          </a>
        ))}
        <a href="#contact" onClick={close}>
          <span className="idx">06.</span>get in touch ↗
        </a>
      </div>
    </nav>
  );
}
