export function SectionHead({ num, title, label }: { num: string; title: string; label: string }) {
  return (
    <div className="section-head reveal">
      <span className="num">// {num}</span>
      <h2>{title}</h2>
      <span className="label">{label}</span>
    </div>
  );
}
