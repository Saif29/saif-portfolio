"use client";
import { useLocalTime } from "@/hooks/useLocalTime";
import { data } from "@/lib/data";

export function Hero() {
  const time = useLocalTime();
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero-meta reveal">
          <span className="pill">available · open to remote &amp; relocation</span>
          <span className="mono" style={{ fontSize: 12, color: "var(--fg-dim)" }}>
            {data.location}{time ? ` · ${time}` : ""}
          </span>
        </div>

        <h1 className="hero-name reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          Saif<br />Ur Rehman<span className="last">.</span>
        </h1>

        <p className="hero-tagline reveal" style={{ "--d": "180ms" } as React.CSSProperties}>
          I ship <span className="accent">payments</span>,<br />
          not just <span className="strike">pixels</span>.
        </p>

        <div className="hero-bottom">
          <p className="role mono reveal" style={{ "--d": "300ms" } as React.CSSProperties}>
            <b>Full Stack Engineer</b>{" "}with 4+ years building web and mobile products in{" "}
            <b>React, Next.js, TypeScript, Node.js, and PostgreSQL</b>. Currently shipping a
            fintech platform that moved <b>$1M+ in cash flow</b>{" "}in its first 5 months, used by{" "}
            <b>2,000+ customers</b>{" "}and <b>40+ businesses</b>{" "}across ACH, Fedwire, SWIFT, and crypto.
          </p>
          <div className="stack reveal" style={{ "--d": "420ms" } as React.CSSProperties}>
            <span>react</span>·
            <span>next.js</span>·
            <span>react native</span>·
            <span>node.js</span>·
            <span>postgres</span>
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
