import { business } from "@/content/business";
import { Fill } from "@/components/ui/Fill";

export function HoursList({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <dl className="m-0">
      {business.hours.map((h) => (
        <div
          key={h.days}
          className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b py-3 first:pt-0 last:border-b-0 ${
            dark ? "border-white/20" : "border-line"
          }`}
        >
          <dt className={dark ? "text-white/80" : "text-ink-2"}>{h.days}</dt>
          <dd className={`m-0 font-medium ${dark ? "text-white" : "text-ink"}`}>
            <Fill text={h.time} tone={tone} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
