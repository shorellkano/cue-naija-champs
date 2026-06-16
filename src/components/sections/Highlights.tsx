import { Reveal } from "@/components/ui/Reveal";
import { GitBranch, LayoutGrid, Trophy } from "lucide-react";

const rows = [
  {
    title: "Group Stage Battles",
    body: "Thirty-two players are drawn into eight groups of four. Every frame counts as players fight for one of two qualifying spots per group, setting the stage for a fierce Sunday knockout.",
    icon: LayoutGrid,
  },
  {
    title: "Professional Setup",
    body: "Tournament-grade tables, certified referees, and strict WPBSA rules. Every match is played to the highest standard so the best cueist truly rises to the top.",
    icon: GitBranch,
  },
  {
    title: "Prizes and Recognition",
    body: "Cash rewards across the podium, the Cue Naija Masters championship trophy, and lasting bragging rights as the finest snooker talent in Lagos.",
    icon: Trophy,
  },
];

export function Highlights() {
  return (
    <section className="bg-surface-2 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            Tournament <span className="text-gold">Highlights</span>
          </h2>
        </Reveal>
        <div className="mt-16 space-y-16">
          {rows.map((row, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={row.title}>
                <div
                  className={`flex flex-col items-center gap-8 md:gap-16 ${
                    flip ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-gold">
                      {row.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-muted">
                      {row.body}
                    </p>
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full border border-gold/30 bg-emerald-dark/40">
                      <row.icon
                        size={64}
                        strokeWidth={1.2}
                        className="text-gold"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}