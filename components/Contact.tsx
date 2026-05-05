import { SectionHead } from "./SectionHead";
import { data } from "@/lib/data";

export function Contact() {
  const rows = [
    { k: "email", v: data.email, href: `mailto:${data.email}` },
    { k: "phone", v: data.phone, href: `tel:${data.phone}` },
    { k: "github", v: data.links.githubDisplay, href: data.links.github },
    { k: "linkedin", v: data.links.linkedinDisplay, href: data.links.linkedin },
    { k: "location", v: data.location, href: null },
  ];

  return (
    <section id="contact" className="contact">
      <div className="shell">
        <SectionHead num="05" title="Contact" label="// open to senior FE roles" />
        <div className="contact-inner">
          <div>
            <h2 className="reveal">
              Have something<br />
              worth <span className="accent">building?</span>
            </h2>
            <p className="lead reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
              I&apos;m open to senior frontend roles, contract work, and founding-engineer
              conversations. Fastest reply by email.
            </p>
            <a className="contact-cta reveal" style={{ "--d": "220ms" } as React.CSSProperties} href={`mailto:${data.email}`}>
              <span>{data.email}</span>
              <span className="arrow">↗</span>
            </a>
          </div>
          <div className="contact-list">
            {rows.map((r, i) => {
              const inner = (
                <>
                  <span className="k">{r.k}</span>
                  <span className="v">{r.v}</span>
                  <span className="arrow">{r.href ? "↗" : "·"}</span>
                </>
              );
              return r.href ? (
                <a
                  key={i}
                  className="contact-row reveal"
                  style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="contact-row reveal" style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
