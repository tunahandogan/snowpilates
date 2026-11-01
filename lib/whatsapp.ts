import { business, classTypes, frequencies, levels, timePrefs } from "@/content/business";

export type Plan = {
  classId?: string;
  frequency?: string;
  level?: string;
  times?: string[];
  note?: string;
};

export function waLink(text?: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text ?? business.whatsappMessage)}`;
}

export function planMessage(p: Plan): string {
  const lines: string[] = ["Merhaba, web sitenizden yazıyorum. Pilates için bilgi almak istiyorum."];
  const cls = classTypes.find((c) => c.id === p.classId);
  const freq = frequencies.find((f) => f.id === p.frequency);
  const lvl = levels.find((l) => l.id === p.level);
  const times = timePrefs.filter((t) => p.times?.includes(t.id)).map((t) => t.label);
  const note = p.note?.trim();

  const details: string[] = [];
  if (cls) details.push(`Ders türü: ${cls.name}`);
  if (freq) details.push(`Sıklık: ${freq.label}`);
  if (lvl) details.push(`Seviye: ${lvl.label}`);
  if (times.length) details.push(`Uygun zaman: ${times.join(", ")}`);
  if (note) details.push(`Not: ${note}`);

  if (details.length) lines.push("", ...details);
  lines.push("", "Uygun ders ve saatleri paylaşabilir misiniz?");
  return lines.join("\n");
}

export function classLink(classId: string): string {
  const cls = classTypes.find((c) => c.id === classId);
  if (!cls) return waLink();
  return waLink(
    `Merhaba, web sitenizden yazıyorum. ${cls.name} hakkında bilgi almak istiyorum. Uygun gün ve saatleri paylaşabilir misiniz?`,
  );
}
