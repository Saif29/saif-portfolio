import { SectionHead } from "./SectionHead";
import { data } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills">
      <div className="shell">
        <SectionHead num="04" title="Stack & Tooling" label="cat package.json" />
        <div className="skills-grid">
          {data.skills.map((cat, i) => (
            <div key={i} className="skill-cat reveal" style={{ "--d": `${(i % 2) * 80}ms` } as React.CSSProperties}>
              <div className="head"><span className="i">{cat.i}</span>{cat.cat}</div>
              <div className="tags">
                {cat.tags.map((t, j) => (
                  <span key={j} className={"primary" in t && t.primary ? "primary" : ""}>{t.t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
