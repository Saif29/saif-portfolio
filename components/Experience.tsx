import { SectionHead } from "./SectionHead";
import { data } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience">
      <div className="shell">
        <SectionHead num="02" title="Experience" label="git log --oneline" />
        <div className="exp-list">
          {data.experience.map((e, i) => {
            const parts = e.role.includes("→") ? e.role.split("→").map((s) => s.trim()) : null;
            return (
              <article key={i} className="exp-item reveal" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div className="exp-when">
                  <span className="date">{e.date}</span>
                  <span className="loc">{e.loc}</span>
                </div>
                <div>
                  <h3 className="exp-role">
                    {parts ? (
                      <>{parts[0]}<span className="arrow">→</span>{parts[1]}</>
                    ) : e.role}
                  </h3>
                  <div className="exp-company">
                    <a href="#projects">{e.company}</a>
                    {e.companyNote && <span className="badge">{e.companyNote}</span>}
                  </div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
