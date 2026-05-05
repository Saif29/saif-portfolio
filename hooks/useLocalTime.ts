"use client";
import { useState, useEffect } from "react";

function formatPKTime() {
  try {
    return (
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Karachi",
      }).format(new Date()) + " PKT"
    );
  } catch {
    return "";
  }
}

export function useLocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    setT(formatPKTime());
    const i = setInterval(() => setT(formatPKTime()), 30_000);
    return () => clearInterval(i);
  }, []);
  return t;
}
