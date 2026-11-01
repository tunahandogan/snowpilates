import Link from "next/link";

type Variant = "primary" | "outline" | "light" | "soft";

const styles: Record<Variant, string> = {
  primary: "bg-clay-deep text-white hover:bg-ink",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-snow",
  light: "bg-snow text-ink hover:bg-blush",
  soft: "bg-oat text-ink hover:bg-oat-2",
};

/** Görünürlük sınıfı (hidden vb.) VERME: sarmalayıcı span/div ile ver. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  size?: "md" | "lg";
}) {
  const cls = `tap inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-colors duration-300 ${
    size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-[0.95rem]"
  } ${styles[variant]} ${className}`;
  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
