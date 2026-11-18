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
              <dt>role</dt><dd>Full Stack Engineer</dd>
              <dt>based</dt><dd>{data.location}</dd>
              <dt>open to</dt><dd>Remote &amp; relocation</dd>
              <dt>since</dt><dd>2022 (4+ yrs)</dd>
              <dt>remote</dt><dd>2+ yrs with UAE, KSA &amp; US teams</dd>
              <dt>formerly</dt><dd>Frontend Team Lead · Graana</dd>
              <dt>email</dt><dd><a href={`mailto:${data.email}`}>{data.email}</a></dd>
              <dt>github</dt><dd><a href={data.links.github} target="_blank" rel="noopener">{data.links.githubDisplay}</a></dd>
              <dt>linkedin</dt><dd><a href={data.links.linkedin} target="_blank" rel="noopener">{data.links.linkedinDisplay}</a></dd>
            </dl>
          </aside>
          <div className="about-body">
            <p className="reveal" style={{ "--d": "80ms" } as React.CSSProperties}>
              Full stack engineer who treats the product as a <span className="em">whole surface</span>,
              from the <b>React and React Native</b> clients down through <b>Node.js, Express, TypeORM,
              and PostgreSQL</b> APIs. <b>2+ years working remotely</b> with international teams on
              products for the <b>UAE, Saudi Arabia, and US</b> markets, including a
              <span className="em"> Y Combinator-backed</span> Dubai fintech and the cross-border
              payment platform I build on today.
            </p>
            <p className="reveal" style={{ "--d": "160ms" } as React.CSSProperties}>
              <span className="dim">Strong on </span>React, Next.js, TypeScript, Redux, React Native,
              Node.js, Express, and PostgreSQL<span className="dim">, with production experience in
              Stripe, Apple Pay, Google Pay, crypto pay-ins, and payout integrations. </span>
              <b>Former Frontend Team Lead</b><span className="dim">, now shipping full-stack features
              and comfortable going </span>0 to 1 in weeks, not quarters<span className="dim">, in
              small remote teams across time zones.</span>
            </p>

            <div className="about-stats">
              <div className="stat reveal" style={{ "--d": "240ms" } as React.CSSProperties}>
                <div className="v">$1M<span className="unit">+</span></div>
                <div className="l">cash flow handled<br />(WhizPay, 5 mo)</div>
              </div>
              <div className="stat reveal" style={{ "--d": "320ms" } as React.CSSProperties}>
                <div className="v">2,000<span className="unit">+</span></div>
                <div className="l">customers on<br />mobile + web</div>
              </div>
              <div className="stat reveal" style={{ "--d": "400ms" } as React.CSSProperties}>
                <div className="v">30-40<span className="unit">%</span></div>
                <div className="l">load-time<br />cut (Graana)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
