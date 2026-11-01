export function Eyebrow({
  children,
  tone = "clay",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "clay" | "light" | "muted";
  className?: string;
}) {
  const color = tone === "light" ? "text-white/80" : tone === "muted" ? "text-muted" : "text-clay-deep";
  return (
    <p className={`flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.2em] ${color} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}
