import { SectionHead } from "./SectionHead";
import { data } from "@/lib/data";

export function About() {
  return (
    <section id="about">
      <div className="shell">
        <SectionHead num="01" title="About" label="~/about.md" />
        <div className="about-grid">
          <aside className="about-side reveal">
            <dl>
              <dt>name</dt><dd>Saif Ur Rehman</dd>
              <dt>role</dt><dd>Sr. Frontend Engineer</dd>
              <dt>based</dt><dd>{data.location}</dd>
              <dt>since</dt><dd>2022 (4+ yrs)</dd>
              <dt>email</dt><dd><a href={`mailto:${data.email}`}>{data.email}</a></dd>
              <dt>github</dt><dd><a href={data.links.github} target="_blank" rel="noopener">{data.links.githubDisplay}</a></dd>
              <dt>linkedin</dt><dd><a href={data.links.linkedin} target="_blank" rel="noopener">{data.links.linkedinDisplay}</a></dd>
            </dl>
          </aside>
          <div className="about-body">
            <p className="reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
              Frontend-focused engineer who treats the UI as a <span className="em">product surface</span>,
              not a stack of components. I&apos;ve shipped across fintech, insurance, AI video,
              and real estate — including a <span className="em">Y Combinator-backed</span> startup
              where I owned web and React Native end-to-end.
            </p>
            <p className="reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
              <span className="dim">Strong on </span>React, Next.js, TypeScript, Redux, React Native
              <span className="dim"> — with hands-on full-stack work in Django and Node. Comfortable
              going from </span>0 → 1 in five weeks<span className="dim">, leading small teams,
              and making the kind of measured performance bets that move the needle.</span>
            </p>

            <div className="about-stats">
              <div className="stat reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
                <div className="v">30–40<span className="unit">%</span></div>
                <div className="l">load-time<br />improvement (Graana)</div>
              </div>
              <div className="stat reveal" style={{ "--d": "320ms" } as React.CSSProperties}>
                <div className="v">8<span className="unit"> mo</span></div>
                <div className="l">to Frontend<br />Team Lead</div>
              </div>
              <div className="stat reveal" style={{ "--d": "400ms" } as React.CSSProperties}>
                <div className="v">0→1<span className="unit"> · 5w</span></div>
                <div className="l">Premiere Pro<br />extension shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
