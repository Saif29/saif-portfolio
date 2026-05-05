"use client";
import { useRef } from "react";
import { SectionHead } from "./SectionHead";
import { useHoverLight } from "@/hooks/useHoverLight";
import { data } from "@/lib/data";

type Project = (typeof data.projects)[number];

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  const ref = useRef<HTMLElement>(null);
  useHoverLight(ref);

  return (
    <article
      ref={ref}
      className={`proj-card reveal${p.featured ? " featured" : ""}`}
      style={{ "--d": `${idx * 80}ms` } as React.CSSProperties}
    >
      <div className="proj-head">
        <div>
          <h3 className="proj-title">{p.name}</h3>
          <div className="proj-meta">
            <span>{p.tag}</span>
            <span>·</span>
            <span>{p.year}</span>
            {p.yc && (
              <span className="yc"><span className="y">Y</span>Combinator-backed</span>
            )}
          </div>
        </div>
      </div>

      <p className="proj-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />

      {p.showCode && (
        <pre className="code-block">
          <span>{`> nomod.checkout.optimize({\n    `}</span>
          <span className="k">providers</span>
          <span>{`: [`}</span>
          <span className="s">&quot;applePay&quot;</span>
          <span>{`, `}</span>
          <span className="s">&quot;googlePay&quot;</span>
          <span>{`, `}</span>
          <span className="s">&quot;stripe&quot;</span>
          <span>{`, `}</span>
          <span className="s">&quot;myFatoorah&quot;</span>
          <span>{`],\n    `}</span>
          <span className="k">platforms</span>
          <span>{`:  [`}</span>
          <span className="s">&quot;web&quot;</span>
          <span>{`, `}</span>
          <span className="s">&quot;reactNative&quot;</span>
          <span>{`],\n    `}</span>
          <span className="k">conversion</span>
          <span>{`:  `}</span>
          <span className="n">&quot;↑&quot;</span>
          <span>{` `}</span>
          <span className="c">// merchants growth ✓</span>
          <span>{`\n  })`}</span>
        </pre>
      )}

      <div className="proj-stack">
        {p.stack.map((s, i) => <span key={i}>{s}</span>)}
      </div>

      <div className="proj-foot">
        <span className="role">{p.role}</span>
        <span>case study available on request</span>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="shell">
        <SectionHead num="03" title="Selected Projects" label="ls -la ./projects" />
        <div className="proj-grid">
          {data.projects.map((p, i) => <ProjectCard key={i} p={p} idx={i} />)}
        </div>
      </div>
    </section>
  );
}
