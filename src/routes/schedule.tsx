import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Car, Clock } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { Bracket } from "@/components/ui/Bracket";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { TOURNAMENT } from "@/lib/constants";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule and Venue | Cue Naija Masters" },
      {
        name: "description",
        content:
          "Two days of competitive snooker in Magodo. See the full day-by-day schedule, bracket, and venue details.",
      },
      { property: "og:title", content: "Schedule and Venue" },
      {
        property: "og:description",
        content: "Group stage Saturday, knockouts Sunday.",
      },
    ],
  }),
  component: Schedule,
});

const day1 = [
  ["10:00 AM", "Player Check-in and Draw"],
  ["11:00 AM", "Group Stage Begins (8 groups simultaneously)"],
  ["2:00 PM", "Lunch Break"],
  ["3:00 PM", "Group Stage Resumes"],
  ["6:00 PM", "End of Day 1, group results announced"],
];

const day2 = [
  ["12:00 PM", "Round of 16"],
  ["2:30 PM", "Quarter-Finals"],
  ["4:30 PM", "Semi-Finals"],
  ["5:30 PM", "Final"],
  ["6:30 PM", "Trophy Presentation and Prize Giving"],
];

function Timeline({ items }: { items: string[][] }) {
  return (
    <ul className="mt-8 space-y-6 border-l-2 border-gold/40 pl-6">
      {items.map(([time, label]) => (
        <li key={time} className="relative">
          <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gold" />
          <p className="font-display text-lg font-bold text-gold">{time}</p>
          <p className="text-sm text-text-muted">{label}</p>
        </li>
      ))}
    </ul>
  );
}

function Schedule() {
  return (
    <>
      <PageBanner title="Schedule and Venue" crumb="Schedule" />

      {/* Day 1 */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              {TOURNAMENT.date.day1}
            </span>
            <h2 className="mt-4 font-display text-3xl font-black text-white">
              Day 1, Group Stage
            </h2>
            <Timeline items={day1} />
            <div className="mt-8 border-l-4 border-gold bg-surface-2 p-5">
              <p className="text-sm text-text-muted">
                Eight groups of four players each. The top two from every group
                advance to Sunday's knockouts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="diagonal" from="#111811" to="#1A2A1A" />

      {/* Day 2 */}
      <section className="bg-surface-2 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="rounded-full bg-emerald px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              {TOURNAMENT.date.day2}
            </span>
            <h2 className="mt-4 font-display text-3xl font-black text-white">
              Day 2, Knockout Stage
            </h2>
            <Timeline items={day2} />
          </Reveal>
        </div>
      </section>

      {/* Bracket */}
      <section className="bg-ink px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              Knockout <span className="text-gold">Bracket</span>
            </h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-text-muted">
              <Clock size={16} className="text-gold" /> Slots populate once the
              group stage concludes.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <Bracket />
          </Reveal>
        </div>
      </section>

      {/* Venue */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              The <span className="text-gold">Venue</span>
            </h2>
            <p className="mt-4 font-display text-xl text-white">
              {TOURNAMENT.venue.name}
            </p>
            <p className="mt-2 flex items-start gap-2 text-text-muted">
              <MapPin size={18} className="mt-0.5 text-gold" />
              {TOURNAMENT.venue.address}
            </p>
            <p className="mt-4 flex items-start gap-2 text-text-muted">
              <Car size={18} className="mt-0.5 text-gold" />
              {TOURNAMENT.venue.parking}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm ring-1 ring-emerald/40">
              <div className="pointer-events-none absolute inset-0 z-10 bg-emerald/20 mix-blend-multiply" />
              <iframe
                title="Venue map"
                src={TOURNAMENT.venue.mapEmbedUrl}
                className="h-72 w-full"
                style={{ filter: "grayscale(100%) hue-rotate(90deg) brightness(0.7)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}