"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { business, classTypes, frequencies, levels, timePrefs } from "@/content/business";
import { planMessage, waLink, type Plan } from "@/lib/whatsapp";

function WaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.08.8.82-3-.2-.31a8.2 8.2 0 1 1 6.94 3.84Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-3.33-2.9c-.25-.43.25-.4.72-1.33.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74 1.58.68 2.2.74 3 .62.49-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

function Chip({
  selected,
  onClick,
  children,
  hint,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  hint?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      animate={reduce ? undefined : { scale: selected ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`tap inline-flex items-center justify-center rounded-full border px-4 text-[0.95rem] font-medium transition-colors duration-300 ${
        selected
          ? "border-clay-deep bg-clay-deep text-snow"
          : "border-line bg-snow text-ink-2 hover:border-clay hover:bg-blush"
      }`}
    >
      <span className="flex flex-col items-center leading-tight">
        <span>{children}</span>
        {hint ? (
          <span className={`text-xs font-normal ${selected ? "text-snow/85" : "text-muted"}`}>{hint}</span>
        ) : null}
      </span>
    </motion.button>
  );
}

function Group({ legend, children, compact }: { legend: string; children: React.ReactNode; compact: boolean }) {
  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className={`font-display text-ink ${compact ? "mb-2 text-base" : "mb-3 text-lg"}`}>{legend}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

export function DersPlanner({ variant = "page" }: { variant?: "home" | "page" }) {
  const compact = variant === "home";
  const headingId = useId();
  const reduce = useReducedMotion();
  const [plan, setPlan] = useState<Plan>({ times: [] });

  const pick = (key: "classId" | "frequency" | "level", id: string) =>
    setPlan((p) => ({ ...p, [key]: p[key] === id ? undefined : id }));
  const toggleTime = (id: string) =>
    setPlan((p) => {
      const cur = p.times ?? [];
      return { ...p, times: cur.includes(id) ? cur.filter((t) => t !== id) : [...cur, id] };
    });

  const message = planMessage(plan);
  const href = waLink(message);

  return (
    <section aria-labelledby={headingId} className={`${compact ? "py-14 sm:py-16" : "section"} bg-oat`}>
      <div className="wrap">
        <div
          className={`grid items-start ${
            compact ? "gap-8 lg:grid-cols-[1.15fr_1fr]" : "gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14"
          }`}
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-clay-deep">Ders planlayıcı</p>
            <h2
              id={headingId}
              className={`font-display text-ink ${compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"}`}
            >
              Size uygun dersi <em className="font-normal italic text-clay-deep">birlikte planlayalım</em>
            </h2>
            <p className="mt-3 max-w-xl text-ink-2">
              Seçimlerinizi yapın, hazır mesajı WhatsApp&apos;ta gönderin. Seçmediğiniz alanlar mesaja eklenmez.
            </p>

            <div className={`mt-7 flex flex-col ${compact ? "gap-5" : "gap-7"}`}>
              <Group legend="Ders türü" compact={compact}>
                {classTypes.map((c) => (
                  <Chip key={c.id} selected={plan.classId === c.id} onClick={() => pick("classId", c.id)}>
                    {c.short}
                  </Chip>
                ))}
              </Group>
              <Group legend="Haftada kaç ders" compact={compact}>
                {frequencies.map((f) => (
                  <Chip key={f.id} selected={plan.frequency === f.id} onClick={() => pick("frequency", f.id)}>
                    {f.label}
                  </Chip>
                ))}
              </Group>
              <Group legend="Seviyeniz" compact={compact}>
                {levels.map((l) => (
                  <Chip
                    key={l.id}
                    selected={plan.level === l.id}
                    onClick={() => pick("level", l.id)}
                    hint={compact ? undefined : l.hint}
                  >
                    {l.label}
                  </Chip>
                ))}
              </Group>
              <Group legend="Uygun zamanlar (birden fazla seçebilirsiniz)" compact={compact}>
                {timePrefs.map((t) => (
                  <Chip key={t.id} selected={!!plan.times?.includes(t.id)} onClick={() => toggleTime(t.id)}>
                    {t.label}
                  </Chip>
                ))}
              </Group>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-snow p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="font-display text-xl text-ink">Mesaj önizlemesi</h3>
            <div
              aria-live="polite"
              className="mt-3 rounded-2xl rounded-tl-sm bg-sage-soft p-4 text-[0.95rem] leading-relaxed text-ink"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={message}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="whitespace-pre-line"
                >
                  {message}
                </motion.p>
              </AnimatePresence>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="tap mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-deep px-6 font-semibold text-snow transition-colors hover:bg-ink"
            >
              <WaGlyph className="size-5" />
              WhatsApp&apos;tan yaz
            </a>
            <p className="mt-3 text-sm text-muted">
              Bilgi kaydetmiyoruz. Mesaj {business.displayName} WhatsApp hattına, sizin telefonunuzdan gider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
