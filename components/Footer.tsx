export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="shell" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, width: "100%" }}>
        <span>© {year} Saif Ur Rehman · Full Stack Engineer · all rights reserved</span>
        <span>built with next.js · react 19 · typescript</span>
      </div>
    </footer>
  );
}
