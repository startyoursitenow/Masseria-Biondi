export function SectionHeader({ eyebrow, title, inverted = false }: { eyebrow: string; title: string; inverted?: boolean }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${inverted ? "text-accent" : "text-brand-600"}`}>{eyebrow}</p>
      <h2 className={`text-balance text-3xl font-bold leading-tight sm:text-4xl ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
    </div>
  );
}
