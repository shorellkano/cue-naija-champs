import { CalendarDays, CircleDot, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  {
    icon: CalendarDays,
    value: "2-Day Tournament",
    label: "Group Stage and Knockout Format",
  },
  {
    icon: CircleDot,
    value: "32 Players",
    label: "Limited Spots Available",
  },
  {
    icon: Trophy,
    value: "Cash Prizes",
    label: "Plus Championship Trophy",
  },
];

export function QuickStats() {
  return (
    <section className="bg-surface px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 0.1} className="text-center">
            <s.icon className="mx-auto text-gold" size={44} strokeWidth={1.5} />
            <p className="mt-4 font-display text-2xl font-bold text-gold">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}