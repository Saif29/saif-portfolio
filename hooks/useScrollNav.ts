"use client";
import { useState, useEffect } from "react";

export function useScrollNav(sectionIds: string[]) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds.join(",")]);

  return { scrolled, active };
}
