import { SectionHead } from "./SectionHead";
import { data } from "@/lib/data";

export function Education() {
  const e = data.education;
  return (
    <section id="education">
      <div className="shell">
        <SectionHead num="06" title="Education" label="~/edu" />
        <div className="edu reveal">
          <div className="when">{e.when}</div>
          <div className="what">
            {e.degree}
            <span className="school">{e.school}</span>
            <span className="school" style={{ opacity: 0.7 }}>CGPA: {e.cgpa}</span>
          </div>
          <div className="where">{e.where}</div>
        </div>
      </div>
    </section>
  );
}
