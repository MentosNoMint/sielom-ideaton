// Тонкая сетка как на листе макета
const GridBg = () => (
  <div
    aria-hidden
    className="fixed inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(to right, var(--color-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px)",
      backgroundSize: "calc(100% / 6) calc(100% / 4)",
    }}
  />
);

export default GridBg;
