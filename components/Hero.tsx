"use client";
import { useLocalTime } from "@/hooks/useLocalTime";
import { data } from "@/lib/data";

export function Hero() {
  const time = useLocalTime();
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-meta reveal">
          <span className="pill">available · q3 2026</span>
          <span className="mono" style={{ fontSize: 12, color: "var(--fg-dim)" }}>
            {data.location}{time ? ` · ${time}` : ""}
          </span>
        </div>

        <h1 className="hero-name reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          Saif<br />Ur Rehman<span className="last">.</span>
        </h1>

        <p className="hero-tagline reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
          I ship <span className="accent">product</span>,<br />
          not just <span className="strike">components</span>.
        </p>

        <div className="hero-bottom">
          <p className="role mono reveal" style={{ "--d": "300ms" } as React.CSSProperties}>
            <b>Senior Frontend Engineer</b>{" "}with 4+ years building scalable products
            across fintech, insurance, AI &amp; real estate, including a
            Y Combinator-backed startup. Comfortable in high-ownership, ship-fast
            environments.
          </p>
          <div className="stack reveal" style={{ "--d": "420ms" } as React.CSSProperties}>
            <span>react</span>·
            <span>react native</span>·
            <span>next.js</span>·
            <span>typescript</span>
          </div>
        </div>

        <a href="#about" className="scroll-cue reveal" style={{ "--d": "560ms" } as React.CSSProperties}>
          <span>scroll</span>
          <span className="arrow" />
        </a>
      </div>
    </section>
  );
}
